"use client";
import * as z from "zod";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define Zod schema
const FormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  previous_experience: z
    .string()
    .min(1, "Please describe your previous experience"),
  starting_session: z.string().min(1, "Starting session is required"),
  notes: z.string().optional(),
  education: z.array(
    z.object({
      degree: z.string().min(1, "Degree is required"),
      field: z.string().min(1, "Field is required"),
      institution: z.string().min(1, "Institution is required"),
    })
  ),
});


type FormData = z.infer<typeof FormSchema>;

const CourseRegistrationForm: FC = () => {
  const { toast } = useToast();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          variant: "success",
          title: "Form submitted",
          description: "We will contact you soon",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        variant: "error",
        title: "Error submitting form",
        description: "Please try again",
      });
    }
  };

  return (
    <div className="bg-grid-white/[0.08] min-h-screen flex flex-col justify-center items-center p-8">
      <h2 className="text-4xl font-semibold text-indigo-500 mb-8">
        Register for the Course
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-to-b from-neutral-900 to-black rounded-xl border border-neutral-800 p-8 max-w-xl w-full"
      >
        {/* Form fields with Zod validation and error handling */}

        <p className="text-lg text-white mb-4">Personal Information</p>

        <div className="mb-4">
          <input
            id="first_name"
            {...register("first_name")}
            className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
            placeholder="First Name"
          />
          {errors.first_name && (
            <span className="text-red-500">{errors.first_name.message}</span>
          )}
        </div>
        <div className="mb-4">
          <input
            id="last_name"
            {...register("last_name")}
            className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
            placeholder="Last Name"
          />
          {errors.last_name && (
            <span className="text-red-500">{errors.last_name.message}</span>
          )}
        </div>
        <div className="mb-4">
          <input
            id="email"
            {...register("email")}
            className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4">
          <input
            id="phone"
            {...register("phone")}
            className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
            placeholder="Phone Number"
          />
          {errors.phone && (
            <span className="text-red-500">{errors.phone.message}</span>
          )}
        </div>
        <div className="mb-4">
          <input
            id="previous_experience"
            {...register("previous_experience")}
            className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
            placeholder="Previous Experience"
          />
          {errors.previous_experience && (
            <span className="text-red-500">
              {errors.previous_experience.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <input
            id="starting_session"
            {...register("starting_session")}
            className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
            placeholder="Starting Session"
          />
          {errors.starting_session && (
            <span className="text-red-500">
              {errors.starting_session.message}
            </span>
          )}
        </div>

        {/* Additional form fields with similar validation */}
        <div>
          <p className="text-lg text-white mb-4">Education</p>
          <div className="mb-4">
            <input
              id="education-0-degree"
              {...register("education.0.degree")}
              className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
              placeholder="Degree"
            />
            {errors.education && errors.education[0]?.degree && (
              <span className="text-red-500">
                {errors.education[0].degree.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <input
              id="education-0-field"
              {...register("education.0.field")}
              className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
              placeholder="Field"
            />
            {errors.education && errors.education[0]?.field && (
              <span className="text-red-500">
                {errors.education[0].field.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <input
              id="education-0-institution"
              {...register("education.0.institution")}
              className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
              placeholder="Institution"
            />
            {errors.education && errors.education[0]?.institution && (
              <span className="text-red-500">
                {errors.education[0].institution.message}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            id="notes"
            {...register("notes")}
            className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
            placeholder="Additional notes"
          />
          {errors.notes && (
            <span className="text-red-500">{errors.notes.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r text-xl border border-indigo-500 from-indigo-800/20 to bg-black px-6 py-3 rounded-full text-white flex items-center gap-4"
        >
          Register Now <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

export default CourseRegistrationForm;

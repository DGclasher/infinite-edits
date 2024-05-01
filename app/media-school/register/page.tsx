"use client"
import { useState } from "react";
import * as z from "zod";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon } from "lucide-react";

// Define Zod schema
const FormSchema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Invalid phone number"),
  previous_experience: z.enum(["None", "Beginner", "Intermediate", "Advanced"]).optional(),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof FormSchema>;

const CourseRegistrationForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
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
    setIsSubmitting(true); 
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
        const res = await response.json();
        throw new Error(res.message);
      }
    } catch (error: any) {
      toast({
        variant: "error",
        title: "Error submitting form",
        description: error.message,
      });
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="bg-grid-white/[0.08] min-h-screen flex flex-col justify-center items-center p-8">
      <h2 className="text-4xl font-semibold text-indigo-500 mb-8">Register for the Course</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-to-b from-neutral-900 to-black rounded-xl border border-neutral-800 p-8 max-w-xl w-full"
      >
        <p className="text-lg text-white mb-4">Personal Information</p>

        {/* Form fields (Name, Email, Phone, Previous Experience, Notes) */}
        
        <div className="mb-4">
          <input
            id="name"
            {...register("name")}
            className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
            placeholder="Full Name *"
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        
        <div className="mb-4">
          <input
            id="email"
            {...register("email")}
            className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
            placeholder="Email *"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        
        <div className="mb-4">
          <input
            id="phone"
            {...register("phone")}
            className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
            placeholder="Phone Number *"
          />
          {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
        </div>
        
        <div className="mb-4">
          <select
            id="previous_experience"
            {...register("previous_experience")}
            className="w-full p-4 border border-neutral-700 bg-black text-white rounded-xl"
          >
            <option value="None">Previous Experience</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          {errors.previous_experience && (
            <span className="text-red-500">{errors.previous_experience.message}</span>
          )}
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

        {/* Submit button with a loading spinner */}
        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-800/20 to bg-black px-6 py-3 rounded-full text-white flex items-center gap-4"
          disabled={isSubmitting} 
        >
          {isSubmitting ? (
            <>Register Now<LoaderIcon className="animate-spin w-5 h-5" /></>
          ) : (
            <>Register Now <FaArrowRight /></>
          )}
        </button>
      </form>
    </div>
  );
};

export default CourseRegistrationForm;

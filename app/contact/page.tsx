"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { LoaderIcon } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const FormSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email"),
  job_title: z.string(),
  company_name: z.string().optional(),
  help: z.enum(["Learn More", "Get a Quote", "Other"]), 
  services: z.enum([
    "Short video edits",
    "Thumbnail creation",
    "Graphic design",
    "Long form video edits",
    "Digital Marketing",
    "Web Development",
  ]),
  info: z.string().optional(),
});

type FormValues = {
  name: string;
  email: string;
  job_title: string;
  company_name: string;
  help: "Learn More" | "Get a Quote" | "Other";
  services:
    | "Short video edits"
    | "Thumbnail creation"
    | "Graphic design"
    | "Long form video edits"
    | "Digital Marketing"
    | "Web Development";
  info: string;
};
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      services: "Short video edits",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        console.log("Error");
        const response = await res.json();
        throw new Error(response.message);
      }
      if (res.ok) {
        console.log("Success");
        toast({
          title: "Success",
          description: "Your message has been sent",
          variant: "success",
        });
        setSubmitted(true);
        form.reset();
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=" bg-gradient-to-b  from-neutral-950  max-w-screen pb-8 overflow-x-hidden">
      <BackgroundBeams />
      <div className="flex flex-col md:flex-row gap-8 items-start z-10 justify-center md:py-40 px-6">
        <div className="z-10">
          <div className="text-4xl font-medium  w-full md:w-2/3  pb-5 md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-4">
            Contact our team
          </div>
          <div
            className="
              
              py-4
              text-gray-300
                    "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.9440107860064!2d78.3500691746846!3d17.462393700640927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b3f0000001%3A0x57dd07d512be374b!2sRaudra%20EduServices%20Pvt.Limited!5e0!3m2!1sen!2sin!4v1710615238946!5m2!1sen!2sin"
              className="rounded-xl w-[400px] h-[200px] md:h-[400px] max-w-full border-0"
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
            space-y-4
            h-full
            
            md:w-1/3
            bg-gradient-to-b from-neutral-800 to-black backdrop-blur-md border border-neutral-600 rounded-2xl w-full shadow-md p-6"
          >
            <div className="md:flex items-center gap-6  ">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Full Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-zinc-950 rounded-xl p-6 border border-neutral-600 text-white"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Email *
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-zinc-950 rounded-xl p-6 border border-neutral-600 text-white"
                      
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company_name"
              render={({ field }) => (
                <FormItem className="items-center justify-center  w-full">
                  <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Company name?
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-zinc-950 rounded-xl p-6 border border-neutral-600 text-white"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="services"
              render={({ field }) => (
                <FormItem className="w-full items-center justify-center">
                  <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Services you are interested in
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-zinc-950 rounded-xl p-6 border border-neutral-600 text-white">
                        <SelectValue
                          placeholder="Select an option"
                          className="bg-zinc-950 rounded-xl p-2 border border-neutral-600 text-white"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-zinc-950 rounded-xl p-6 border border-neutral-600 text-white">
                      <div className="flex gap-4">
                        <SelectItem
                          value="Graphic design"
                          className="text-white "
                        >
                          Graphic design
                        </SelectItem>
                      </div>
                      <SelectItem
                        value="Short video edits"
                        className="text-white"
                      >
                        Short video edits
                      </SelectItem>
                      <SelectItem
                        value="Thumbnail creation"
                        className="text-white"
                      >
                        Thumbnail creation
                      </SelectItem>
                      <SelectItem
                        value="Digital Marketing"
                        className="text-white"
                      >
                        Digital Marketing
                      </SelectItem>
                      <SelectItem
                        value="Web Development"
                        className="text-white"
                      >
                        Web Development
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="help"
              render={({ field }) => (
                <FormItem className="w-full items-center justify-center">
                  <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    How can we help?
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-zinc-950 rounded-xl p-6 border border-neutral-600 text-white">
                        <SelectValue
                          placeholder="Select an option"
                          className="bg-zinc-950 rounded-xl p-6 border border-neutral-600 text-white"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-zinc-950 rounded-xl p-6 border border-neutral-600 text-white">
                      <SelectItem value="Learn More" className="text-white">
                        Learn More
                      </SelectItem>
                      <SelectItem value="Get a Quote" className="text-white">
                        Get a Quote
                      </SelectItem>
                      <SelectItem value="Other" className="text-white">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="info"
              render={({ field }) => (
                <FormItem className="w-full items-center justify-center">
                  <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Anything else?
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      style={{ height: "100px" }}
                      {...field}
                      className="bg-zinc-950 rounded-xl p-6 border border-neutral-600 text-white"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex gap-4 items-center"></div>

            <div className="flex items-center w-full justify-center gap-4">
              <Button
                type="submit"
                className="
                            text-xl
                            flex
                            gap-2
                            items-center
                            font-light
                            bg-gradient-to-r from-indigo-800/20 to-black border border-indigo-500 rounded-full text-white
                            hover:bg-indigo-950
                            "
                disabled={loading}
                onClick={() => form.handleSubmit(onSubmit)}
              >
                {loading ? (
                  <>
                    Submit
                    <LoaderIcon className="animate-spin w-5 h-5" />
                  </>
                ) : (
                  <>
                    Submit <IoIosSend />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

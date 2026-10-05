"use client"

import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

const projectTypeItems = [
  { value: "installation", label: "Drywall Installation" },
  { value: "taping", label: "Taping & Finishing" },
  { value: "repair", label: "Repairs & Patching" },
  { value: "other", label: "Other" },
];

export default function ContactSection() {
  const [projectType, setProjectType] = useState<string | null>(null);
  const [projectTypeError, setProjectTypeError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Grab the form before any await (currentTarget is cleared after the handler returns)
    const form = e.currentTarget;

    // Make sure they selected a project type
    if (!projectType) {
      setProjectTypeError(true);
      return;
    }
    setProjectTypeError(false);

    // Collect all form data in one place
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const details = formData.get("details") as string;
    const projectTypeLabel =
      projectTypeItems.find((item) => item.value === projectType)?.label ??
      projectType;

    const data = {
      name,
      phone,
      email,
      projectType, // value, e.g. "taping"
      projectTypeLabel, // label, e.g. "Taping & Finishing"
      details,
    };

    // TODO: Plug in your email action here, e.g.
    // await fetch("/api/send-email", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    console.log("Form data:", data);

    // Show success message and reset form
    setSubmitted(true);
    form.reset();
    setProjectType(null);

    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-stone-950 py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Contact Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let's Discuss Your Project
            </h2>
            <p className="mt-4 text-lg text-stone-400 max-w-lg">
              Get in touch with us today for a free, no-obligation quote. Our team is ready to help with any drywall needs.
            </p>

            <div className="mt-12 space-y-8">
              <a
                href="tel:+15555550100"
                className="group flex items-center gap-5 transition-all hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg transition-colors group-hover:bg-primary/90">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-400">Call Us</div>
                  <div className="text-xl font-bold text-white">(555) 555-0100</div>
                </div>
              </a>

              <a
                href="mailto:info@perfectjointdrywall.com"
                className="group flex items-center gap-5 transition-all hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg transition-colors group-hover:bg-primary/90">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-400">Email Us</div>
                  <div className="text-xl font-bold text-white">info@perfectjointdrywall.com</div>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-400">Service Area</div>
                  <div className="text-xl font-bold text-white">Greater Toronto &amp; Surrounding Areas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative">
            <Card className="shadow-2xl border-0 rounded-[2rem] bg-white sm:p-6 lg:p-8">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-extrabold text-stone-900">
                  Request a Free Quote
                </CardTitle>
                <p className="text-stone-500 mt-2 text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        className="bg-stone-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(555) 555-0100"
                        className="bg-stone-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="bg-stone-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-type">Project Type</Label>
                    {/* Base UI Select: pass `items` so SelectValue shows the label, not the raw value */}
                    <Select
                      items={projectTypeItems}
                      value={projectType}
                      onValueChange={(value) => {
                        setProjectType(value);
                        setProjectTypeError(false);
                      }}
                      name="projectType"
                    >
                      <SelectTrigger
                        id="project-type"
                        aria-invalid={projectTypeError}
                        className="w-full bg-stone-50"
                      >
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {projectTypeItems.map((item) => (
                            <SelectItem
                              key={item.value}
                              value={item.value}
                              className="cursor-pointer"
                            >
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {projectTypeError && (
                      <p className="text-sm text-red-600">
                        Please select a project type.
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Project Details</Label>
                    <Textarea
                      id="details"
                      name="details"
                      rows={4}
                      required
                      placeholder="Tell us about your project..."
                      className="min-h-[120px] resize-none bg-stone-50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="mt-4 h-16 w-full gap-3 rounded-xl text-lg font-bold shadow-lg transition-all hover:scale-[1.02] hover:shadow-primary/30 active:scale-[0.98]"
                  >
                    Send Request
                    <ArrowRight className="h-6 w-6" />
                  </Button>

                  {submitted && (
                    <div className="rounded-xl bg-green-50 px-4 py-4 text-center text-sm font-medium text-green-700 ring-1 ring-green-600/20">
                      Thanks! We will be in touch within 24 hours.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
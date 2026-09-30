'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Base UI's Select needs an `items` array on the root (unlike Radix, which
// only reads its options from the JSX children). The array doubles as the
// list SelectValue uses to look up the label for the current value, so the
// placeholder needs an entry too, with value: null.
const projectTypeItems: { label: string; value: string | null }[] = [
  { label: 'Select a service...', value: null },
  ...services.map((s) => ({ label: s.title, value: s.title })),
  { label: 'Other / Not Sure', value: 'Other' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState<string | null>(null);

  return (
    <section id="contact" className="relative overflow-hidden bg-stone-900 py-24">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
              <span className="h-px w-8 bg-primary" />
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
              Ready to start your project?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-300">
              Tell us about your drywall or carpentry project and we will get
              back to you within 24 hours with a free, no-obligation estimate.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="tel:+15555550100"
                className="group flex items-center gap-4 transition-opacity hover:opacity-80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-primary/90">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-400">
                    Call Us
                  </div>
                  <div className="text-lg font-semibold text-white">
                    (555) 555-0100
                  </div>
                </div>
              </a>
              <a
                href="mailto:info@perfectjointdrywall.com"
                className="group flex items-center gap-4 transition-opacity hover:opacity-80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-primary/90">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-400">
                    Email Us
                  </div>
                  <div className="text-lg font-semibold text-white">
                    info@perfectjointdrywall.com
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-stone-400">
                    Service Area
                  </div>
                  <div className="text-lg font-semibold text-white">
                    Greater Toronto &amp; Surrounding Areas
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-2xl lg:p-2">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-stone-900">
                Request a Free Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!projectType) return;
                  setSubmitted(true);
                  e.currentTarget.reset();
                  setProjectType(null);
                  setTimeout(() => setSubmitted(false), 5000);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(555) 555-0100"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="project-type">Project Type</Label>
                  {/* Base UI Select: controlled via value/onValueChange (not a
                      native <select>), so it's reset manually on submit
                      rather than by form.reset(). */}
                  <Select
                    items={projectTypeItems}
                    value={projectType}
                    onValueChange={setProjectType}
                  >
                    <SelectTrigger id="project-type" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {projectTypeItems.map((item) => (
                          <SelectItem
                            key={item.value ?? 'placeholder'}
                            value={item.value}
                          >
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="details">Project Details</Label>
                  <Textarea
                    id="details"
                    name="details"
                    rows={4}
                    required
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  Send Request
                  <ArrowRight className="h-5 w-5" />
                </Button>

                {submitted && (
                  <div className="rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700">
                    Thanks! We will be in touch within 24 hours.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
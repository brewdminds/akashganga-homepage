import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { RiArrowLeftLine, RiArrowRightLine, RiCheckLine } from "react-icons/ri";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { machines } from "@/data/site";

const enquirySchema = z.object({
  machine: z.string().min(1, "Please choose a machine"),
  capacity: z.string(),
  stone: z.string(),
  name: z.string().min(2, "Please enter your name"),
  company: z.string(),
  phone: z.string().min(8, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").or(z.literal("")),
  message: z.string(),
});
type EnquiryValues = z.infer<typeof enquirySchema>;

const steps = [
  { title: "Your requirement", fields: ["machine", "capacity", "stone"] },
  { title: "Contact details", fields: ["name", "company", "phone", "email", "message"] },
] as const;

const emptyValues: EnquiryValues = {
  machine: "",
  capacity: "",
  stone: "",
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
};

function TextField({
  form,
  name,
  label,
  placeholder,
  type = "text",
}: {
  form: ReturnType<typeof useForm<EnquiryValues>>;
  name: keyof EnquiryValues;
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export function EnquiryForm() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const reduceMotion = useReducedMotion();
  const form = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: emptyValues,
  });

  const next = async () => {
    if (await form.trigger([...steps[0].fields])) setStep(1);
  };
  const reset = () => {
    form.reset(emptyValues);
    setStep(0);
    setSent(false);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="flex min-h-96 flex-col items-center justify-center rounded-lg bg-brand-soft p-8 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
          <RiCheckLine className="h-7 w-7 text-primary-foreground" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-foreground">Enquiry ready</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
          Thank you. This approval prototype has validated your enquiry successfully.
        </p>
        <Button variant="outline" className="mt-6" onClick={reset}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => setSent(true))} noValidate>
        <ol className="grid grid-cols-2 gap-3" aria-label="Enquiry progress">
          {steps.map((item, i) => (
            <li key={item.title} aria-current={step === i ? "step" : undefined}>
              <div
                className={`h-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-border"}`}
              />
              <span
                className={`mt-2 block text-xs font-semibold ${i <= step ? "text-foreground" : "text-muted-foreground"}`}
              >
                Step {i + 1} · {item.title}
              </span>
            </li>
          ))}
        </ol>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={reduceMotion ? false : { opacity: 0, x: step ? 16 : -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: step ? -16 : 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-7"
          >
            {step === 0 ? (
              <div className="grid gap-5">
                <FormField
                  control={form.control}
                  name="machine"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Which machine are you interested in?*</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="grid gap-2.5 sm:grid-cols-2"
                        >
                          {machines.map((machine) => (
                            <label
                              key={machine.title}
                              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                                field.value === machine.title
                                  ? "border-primary bg-brand-soft text-foreground"
                                  : "border-border text-foreground hover:border-brand"
                              }`}
                            >
                              <RadioGroupItem value={machine.title} />
                              <span className="leading-5">{machine.title}</span>
                            </label>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField
                    form={form}
                    name="capacity"
                    label="Required capacity (TPH)"
                    placeholder="e.g. 100"
                  />
                  <TextField
                    form={form}
                    name="stone"
                    label="Stone type"
                    placeholder="e.g. Basalt"
                  />
                </div>
                <Button type="button" size="lg" onClick={next}>
                  Continue <RiArrowRightLine className="nudge" />
                </Button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2">
                <TextField form={form} name="name" label="Name*" />
                <TextField form={form} name="company" label="Company" />
                <TextField form={form} name="phone" label="Phone*" type="tel" />
                <TextField form={form} name="email" label="Email" type="email" />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="sm:col-span-2">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={3}
                          placeholder="Site location, current setup, timeline…"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-3 sm:col-span-2">
                  <Button type="button" variant="outline" size="lg" onClick={() => setStep(0)}>
                    <RiArrowLeftLine /> Back
                  </Button>
                  <Button type="submit" size="lg" className="flex-1">
                    Send Enquiry <RiArrowRightLine className="nudge" />
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </form>
    </Form>
  );
}

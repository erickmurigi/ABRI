'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

/* -------------------- VALIDATION -------------------- */

const consultationSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email').max(255),
  phone: z.string().trim().min(10, 'Phone number is required').max(15),
  propertyType: z.enum(['residential', 'commercial', 'mixed'], {
    required_error: 'Select a property type',
  }),
  units: z.string().trim().min(1, 'Units required'),
  message: z.string().trim().max(1000).optional(),
});

interface ConsultationFormProps {
  trigger: React.ReactNode;
}

/* -------------------- COMPONENT -------------------- */

const ConsultationForm = ({ trigger }: ConsultationFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    units: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handlePropertyTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, propertyType: value }));
    if (errors.propertyType) {
      setErrors(prev => ({ ...prev, propertyType: '' }));
    }
  };

  /* -------------------- SUBMIT -------------------- */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = consultationSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[String(err.path[0])] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/mlgnjyzn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          propertyType: formData.propertyType,
          units: formData.units,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      setIsSuccess(true);
      toast({
        title: 'Request Sent!',
        description: "We'll contact you within 24 hours.",
      });

      setTimeout(() => {
        setOpen(false);
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyType: '',
          units: '',
          message: '',
        });
      }, 2000);
    } catch {
      toast({
        title: 'Error',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* -------------------- UI -------------------- */

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="py-12 text-center animate-fade-up">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p className="text-muted-foreground">
              Your consultation request has been submitted.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Free Consultation
              </DialogTitle>
              <DialogDescription>
                Tell us about your property and we&apos;ll help maximize your
                returns.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-3">
                <Label>Property Type *</Label>
                <RadioGroup
                  value={formData.propertyType}
                  onValueChange={handlePropertyTypeChange}
                  className="flex gap-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="residential" /> Residential
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="commercial" /> Commercial
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="mixed" /> Mixed Use
                  </div>
                </RadioGroup>
                {errors.propertyType && (
                  <p className="text-sm text-destructive">
                    {errors.propertyType}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="units">Number of Units *</Label>
                <Input
                  id="units"
                  name="units"
                  value={formData.units}
                  onChange={handleChange}
                />
                {errors.units && (
                  <p className="text-sm text-destructive">{errors.units}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Info</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <Button
                type="submit"
                className="w-full py-6 text-lg gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Submitting…'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Request Consultation
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t">
              <p className="text-sm text-muted-foreground mb-3">
                Or reach us directly:
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="tel:0790607640"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  0790 607 640
                </a>
                <a
                  href="mailto:abrirealtors@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  abrirealtors@gmail.com
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Kasarani, Nairobi
                </span>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;

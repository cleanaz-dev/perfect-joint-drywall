// This file contains all the data for the site, including navigation links, services, stats, steps, testimonials, and projects. It also imports icons from the lucide-react library for use in the site components.
import {
  Hammer,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Star,
  Ruler,
  PaintRoller,
  Layers,
  Wrench,
  House,
  Award,
  Clock,
  ShieldCheck,
  Quote,
  ChevronRight,
} from 'lucide-react';

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Our Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    icon: Layers,
    title: 'Drywall Installation',
    description:
      'Precision-hung drywall for new builds, additions, and remodels. Seamless joints, perfectly leveled, ready for finish.',
  },
  {
    icon: PaintRoller,
    title: 'Taping & Mudding',
    description:
      'Flawless taping, mudding, and sanding that leaves walls glass-smooth. Every joint blended to disappear.',
  },
  {
    icon: Hammer,
    title: 'Framing & Carpentry',
    description:
      'Wood and metal framing, soffits, bulkheads, and custom carpentry built to exacting tolerances.',
  },
  {
    icon: Wrench,
    title: 'Repairs & Patchwork',
    description:
      'Water damage, holes, cracks, and settling issues repaired so you will never know they were there.',
  },
  {
    icon: House,
    title: 'Basement Finishing',
    description:
      'Full basement build-outs from bare concrete to move-in-ready living space — framing, drywall, doors, trim.',
  },
  {
    icon: Ruler,
    title: 'Custom Trim & Detail',
    description:
      "Crown molding, baseboards, wainscoting, and accent walls finished with a craftsman's eye for detail.",
  },
];

export const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Satisfaction Guaranteed' },
  { value: '0', label: 'Callbacks Needed' },
];

export const steps = [
  {
    icon: Phone,
    title: 'Free Consultation',
    description:
      'We discuss your project, take measurements, and provide an honest, itemized estimate — no pressure, no hidden fees.',
  },
  {
    icon: Ruler,
    title: 'Detailed Planning',
    description:
      'A clear timeline, material list, and scope of work so you know exactly what happens and when.',
  },
  {
    icon: Hammer,
    title: 'Expert Execution',
    description:
      'Our crew arrives on time, works clean, and treats your home with respect from demo to final walk-through.',
  },
  {
    icon: CheckCircle2,
    title: 'Final Walk-Through',
    description:
      'We do not leave until every seam is perfect and you are completely satisfied with the result.',
  },
];

export const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Oakridge, ON',
    rating: 5,
    text: 'Perfect Joint Drywall finished our basement and the work is impeccable. You cannot find a single seam in the drywall. The crew was professional, on time, and left the space cleaner than they found it.',
  },
  {
    name: 'David Chen',
    location: 'Maple Grove, ON',
    rating: 5,
    text: 'After a pipe leak ruined our ceiling, these guys matched the texture so perfectly you would never know there was damage. Fast, fair pricing, and genuinely nice people to work with.',
  },
  {
    name: 'Jennifer Torres',
    location: 'Lakeshore, ON',
    rating: 5,
    text: 'We hired them for a whole-house drywall job on our renovation. The level of finish is outstanding — our painter said it was the best prep work he has ever seen. Highly recommend.',
  },
];

export const projects = [
  {
    image:
      'https://images.pexels.com/photos/4981812/pexels-photo-4981812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Whole-Home Drywall',
    category: 'New Construction',
  },
  {
    image:
      'https://images.pexels.com/photos/8146336/pexels-photo-8146336.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Modern Basement Finish',
    category: 'Basement Remodel',
  },
  {
    image:
      'https://images.pexels.com/photos/36035073/pexels-photo-36035073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Kitchen Renovation',
    category: 'Remodel',
  },
  {
    image:
      'https://images.pexels.com/photos/5493677/pexels-photo-5493677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    title: 'Custom Soffits & Bulkheads',
    category: 'Carpentry',
  },
];

export const icons = {
  Hammer,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  Star,
  Ruler,
  PaintRoller,
  Layers,
  Wrench,
  House,
  Award,
  Clock,
  ShieldCheck,
  Quote,
  ChevronRight,
};

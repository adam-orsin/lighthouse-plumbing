export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service?: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    location: 'Snoqualmie, WA',
    rating: 5,
    text: "Lighthouse Plumbing saved us when our water heater failed on the coldest day of winter. They arrived within an hour and had a new unit installed by evening. Professional, fair pricing, and incredibly kind. We won't call anyone else!",
    service: 'Water Heater Installation',
    date: '2024-01',
  },
  {
    id: '2',
    name: 'Mike & Jennifer T.',
    location: 'Fall City, WA',
    rating: 5,
    text: "We needed a new water line run to our detached garage. Lighthouse used horizontal boring and didn't destroy our landscaping. The crew was respectful, explained everything, and finished ahead of schedule. Highly recommend!",
    service: 'Horizontal Boring',
    date: '2024-02',
  },
  {
    id: '3',
    name: 'David R.',
    location: 'Issaquah, WA',
    rating: 5,
    text: "After trying two other plumbers who couldn't fix our persistent drain issue, Lighthouse found and fixed the problem in one visit. They used a camera to show me exactly what was wrong. Fair price, honest work. These are the good guys.",
    service: 'Drain Cleaning',
    date: '2024-03',
  },
  {
    id: '4',
    name: 'Linda K.',
    location: 'Sammamish, WA',
    rating: 5,
    text: "I've used Lighthouse Plumbing for three different projects over the years. They're always on time, clean up after themselves, and stand behind their work. It's rare to find a contractor you can truly trust. They've earned my loyalty.",
    service: 'Multiple Services',
    date: '2023-11',
  },
];

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Crown, // Direction
  Briefcase, // Production (keeping original)
  FileText, // Script
  Camera, // Camera
  Lightbulb, // Lighting
  Volume2, // Sound
  Music, // Music
  Palette, // Art
  Shirt, // Costume
  Scissors, // Makeup And Hair
  MapPin, // Location
  Truck, // Transport
  Shield, // Safety And Medical
  Zap, // Stunt And Action
  Film, // Editing
  Sparkles, // Special Effects SFX
  Users, // Cast-Artist (keeping original)
  ChefHat, // Catering
  Monitor, // Post-Production
  Music4, // Choreography
} from 'lucide-react';
import { getUserInfo } from '@/utils/sessionStorage';
import MeetingPopup from './MeetingPopup';

const meetings = [
  {
    id: 1,
    title: 'Direction',
    description: 'Direction Department',
    icon: Crown,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Production',
    description: 'Production Department',
    icon: Briefcase,
    color: 'bg-green-500',
  },
  {
    id: 3,
    title: 'Script',
    description: 'Script Department',
    icon: FileText,
    color: 'bg-purple-500',
  },
  {
    id: 4,
    title: 'Camera',
    description: 'Camera Department',
    icon: Camera,
    color: 'bg-orange-500',
  },
  {
    id: 5,
    title: 'Lighting',
    description: 'Lighting Department',
    icon: Lightbulb,
    color: 'bg-amber-500',
  },
  {
    id: 6,
    title: 'Sound',
    description: 'Sound Department',
    icon: Volume2,
    color: 'bg-red-500',
  },
  {
    id: 7,
    title: 'Music',
    description: 'Music Department',
    icon: Music,
    color: 'bg-pink-500',
  },
  {
    id: 8,
    title: 'Art',
    description: 'Art Department',
    icon: Palette,
    color: 'bg-indigo-500',
  },
  {
    id: 9,
    title: 'Costume',
    description: 'Costume Department',
    icon: Shirt,
    color: 'bg-teal-500',
  },
  {
    id: 10,
    title: 'Makeup And Hair',
    description: 'Makeup And Hair Department',
    icon: Scissors,
    color: 'bg-rose-500',
  },
  {
    id: 11,
    title: 'Location',
    description: 'Location Department',
    icon: MapPin,
    color: 'bg-emerald-500',
  },
  {
    id: 12,
    title: 'Transport',
    description: 'Transport & Logistics Department',
    icon: Truck,
    color: 'bg-gray-500',
  },
  {
    id: 13,
    title: 'Safety And Medical',
    description:
      'Safety, Fire & Medical Department (Including Doctor & Ambulance) Department',
    icon: Shield,
    color: 'bg-green-600',
  },
  {
    id: 14,
    title: 'Stunt And Action',
    description: 'Stunt & Action Department',
    icon: Zap,
    color: 'bg-yellow-500',
  },
  {
    id: 15,
    title: 'Editing',
    description: 'Editing Department',
    icon: Film,
    color: 'bg-violet-500',
  },
  {
    id: 16,
    title: 'Special Effects SFX',
    description: 'Special Effects Department',
    icon: Sparkles,
    color: 'bg-cyan-500',
  },
  {
    id: 17,
    title: 'Cast-Artist',
    description: 'Cast/Artist Department',
    icon: Users,
    color: 'bg-blue-600',
  },
  {
    id: 18,
    title: 'Catering',
    description: 'Catering Department',
    icon: ChefHat,
    color: 'bg-orange-600',
  },
  {
    id: 19,
    title: 'Post-Production',
    description: 'Post-Production Department',
    icon: Monitor,
    color: 'bg-slate-500',
  },
  {
    id: 20,
    title: 'Choreography',
    description: 'Choreography Department',
    icon: Music4,
    color: 'bg-fuchsia-500',
  },
];

const MeetingsDisplay: React.FC = () => {
  const [selectedMeeting, setSelectedMeeting] = useState<number | null>(null);
  const { name } = getUserInfo();

  const handleMeetingClick = (meetingId: number) => {
    setSelectedMeeting(meetingId);
  };

  const handleCloseMeeting = () => {
    setSelectedMeeting(null);
  };

  if (selectedMeeting) {
    const meeting = meetings.find((m) => m.id === selectedMeeting);
    return <MeetingPopup meeting={meeting!} onClose={handleCloseMeeting} />;
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-2'>
            Welcome back, {name}!
          </h1>
          <p className='text-gray-600'>Choose a meeting to join</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {meetings.map((meeting) => {
            const IconComponent = meeting.icon;
            return (
              <Card
                key={meeting.id}
                className='hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105 transition-transform'
                onClick={() => handleMeetingClick(meeting.id)}
              >
                <CardHeader className='text-center'>
                  <div
                    className={`w-16 h-16 ${meeting.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className='w-8 h-8 text-white' />
                  </div>
                  <CardTitle className='text-xl'>{meeting.title}</CardTitle>
                  <CardDescription>{meeting.description}</CardDescription>
                </CardHeader>
                <CardContent className='text-center'>
                  <Button className='w-full'>Join Meeting</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MeetingsDisplay;

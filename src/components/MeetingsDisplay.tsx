
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Users, Calendar, Coffee, Briefcase, GraduationCap } from 'lucide-react';
import { getUserInfo } from '@/utils/sessionStorage';
import MeetingPopup from './MeetingPopup';

const meetings = [
  {
    id: 1,
    title: 'Team Standup',
    description: 'Daily team synchronization meeting',
    icon: Users,
    color: 'bg-blue-500',
    duration: '15 minutes'
  },
  {
    id: 2,
    title: 'Project Review',
    description: 'Weekly project progress review',
    icon: Briefcase,
    color: 'bg-green-500',
    duration: '30 minutes'
  },
  {
    id: 3,
    title: 'Client Presentation',
    description: 'Quarterly client presentation',
    icon: Video,
    color: 'bg-purple-500',
    duration: '45 minutes'
  },
  {
    id: 4,
    title: 'Training Session',
    description: 'Professional development workshop',
    icon: GraduationCap,
    color: 'bg-orange-500',
    duration: '60 minutes'
  },
  {
    id: 5,
    title: 'Coffee Chat',
    description: 'Informal networking session',
    icon: Coffee,
    color: 'bg-amber-500',
    duration: '20 minutes'
  },
  {
    id: 6,
    title: 'Planning Meeting',
    description: 'Strategic planning session',
    icon: Calendar,
    color: 'bg-red-500',
    duration: '40 minutes'
  }
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
    const meeting = meetings.find(m => m.id === selectedMeeting);
    return (
      <MeetingPopup 
        meeting={meeting!} 
        onClose={handleCloseMeeting} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, {name}!
          </h1>
          <p className="text-gray-600">Choose a meeting to join</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meetings.map((meeting) => {
            const IconComponent = meeting.icon;
            return (
              <Card 
                key={meeting.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105 transition-transform"
                onClick={() => handleMeetingClick(meeting.id)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${meeting.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{meeting.title}</CardTitle>
                  <CardDescription>{meeting.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-500 mb-4">Duration: {meeting.duration}</p>
                  <Button className="w-full">
                    Join Meeting
                  </Button>
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

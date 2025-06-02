
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Mic, MicOff, Video, VideoOff, Phone, Users } from 'lucide-react';
import { getUserInfo } from '@/utils/sessionStorage';

interface Meeting {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  duration: string;
}

interface MeetingPopupProps {
  meeting: Meeting;
  onClose: () => void;
}

const MeetingPopup: React.FC<MeetingPopupProps> = ({ meeting, onClose }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [meetingTime, setMeetingTime] = useState(0);
  const { name, email } = getUserInfo();

  useEffect(() => {
    // Simulate connection delay
    const connectTimer = setTimeout(() => {
      setIsConnected(true);
    }, 2000);

    return () => clearTimeout(connectTimer);
  }, []);

  useEffect(() => {
    if (!isConnected) return;

    const timer = setInterval(() => {
      setMeetingTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isConnected]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndMeeting = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl h-[80vh] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between border-b">
          <div>
            <CardTitle className="text-xl">{meeting.title}</CardTitle>
            <p className="text-sm text-gray-600">{isConnected ? `Connected as ${name}` : 'Connecting...'}</p>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col">
          {!isConnected ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-lg">Connecting to {meeting.title}...</p>
                <p className="text-sm text-gray-600">Please wait while we set up your meeting</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 bg-gray-900 rounded-lg mb-4 flex items-center justify-center relative">
                <div className="text-center text-white">
                  <div className={`w-24 h-24 ${meeting.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <meeting.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{meeting.title}</h3>
                  <p className="text-gray-300 mb-4">{meeting.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Users className="w-4 h-4" />
                    <span>1 participant</span>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                  {formatTime(meetingTime)}
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant={isMuted ? "destructive" : "secondary"}
                  size="lg"
                  onClick={() => setIsMuted(!isMuted)}
                  className="rounded-full w-12 h-12 p-0"
                >
                  {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </Button>
                
                <Button
                  variant={!isVideoOn ? "destructive" : "secondary"}
                  size="lg"
                  onClick={() => setIsVideoOn(!isVideoOn)}
                  className="rounded-full w-12 h-12 p-0"
                >
                  {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                </Button>
                
                <Button
                  variant="destructive"
                  size="lg"
                  onClick={handleEndMeeting}
                  className="rounded-full w-12 h-12 p-0"
                >
                  <Phone className="w-5 h-5" />
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MeetingPopup;

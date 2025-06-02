import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X } from 'lucide-react';
import { getUserInfo } from '@/utils/sessionStorage';
import JitsiMeetComponent from './VoiceConference/VoiceConference';

interface Meeting {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<unknown>;
  color: string;
}

interface MeetingPopupProps {
  meeting: Meeting;
  onClose: () => void;
}

const MeetingPopup: React.FC<MeetingPopupProps> = ({ meeting, onClose }) => {
  const { name } = getUserInfo();

  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4'>
      <Card className='w-full max-w-4xl h-[80vh] flex flex-col'>
        <CardHeader className='flex flex-row items-center justify-between border-b'>
          <div>
            <CardTitle className='text-xl'>{meeting.title}</CardTitle>
            <p className='text-sm text-gray-600'>{`Connected as ${name}`}</p>
          </div>
          <Button
            variant='ghost'
            size='sm'
            onClick={onClose}
            className='hover:bg-gray-100'
          >
            <X className='w-4 h-4' />
          </Button>
        </CardHeader>

        <CardContent className='flex-1 flex flex-col'>
          {/* <div className='flex-1 bg-gray-900 rounded-lg mb-4 flex items-center justify-center relative'> */}
          <JitsiMeetComponent meeting={meeting} onClose={onClose} />
          {/* </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default MeetingPopup;

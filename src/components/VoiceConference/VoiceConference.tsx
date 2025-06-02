import React, { useState } from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';
import './VoiceConference.css';
import { getUserInfo } from '@/utils/sessionStorage';

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

const JitsiMeetComponent = ({ meeting, onClose }: MeetingPopupProps) => {
  const { title } = meeting;
  const { name, email } = getUserInfo();
  const [roomName] = useState(
    `vpaas-magic-cookie-d9362f5145bb46e7b1dfb7b760d57497/${title}`
  );

  const handleLeaveMeeting = () => {
    onClose();
  };

  // Configure Jitsi with voice-only options
  const jitsiConfig = {
    // Disable video completely
    startWithVideoMuted: true,
    startAudioOnly: true,
    // Disable file sharing and other features
    fileRecordingsEnabled: false,
    fileRecordingsServiceEnabled: false,
    liveStreamingEnabled: false,
    videoShareEnabled: false,
    screenSharingEnabled: false,
    toolbarButtons: [
      'microphone',
      'hangup',
      'settings',
      'raisehand',
      'profile',
      'participants-pane',
    ],
    // Additional options to ensure it's voice only
    prejoinPageEnabled: false,
    disableInitialGUM: true,
  };

  const jitsiInterfaceConfig = {
    TOOLBAR_BUTTONS: [
      'microphone',
      'hangup',
      'settings',
      'raisehand',
      'profile',
      'participants-pane',
    ],
    DISABLE_VIDEO_BACKGROUND: true,
    HIDE_INVITE_MORE_HEADER: true,
    MOBILE_APP_PROMO: false,
    SHOW_JITSI_WATERMARK: false,
    DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
  };

  return (
    <div className='jitsi-container'>
      {
        <div className='jitsi-meet-container'>
          <JitsiMeeting
            domain='8x8.vc'
            // jwt='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb250ZXh0Ijp7InVzZXIiOnsibmFtZSI6IlRlc3QgVXNlciIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsImlkIjoiMTIzNDU2In0sImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsInJlY29yZGluZyI6ZmFsc2UsInRyYW5zY3JpcHRpb24iOnRydWUsIm1vZGVyYXRvciI6dHJ1ZX19LCJhdWQiOiIyMDI1MDUyMS0yMWFhLTRiYmItOWNjYy1kZGVmMDAxMTIyMzMiLCJpc3MiOiIyMDI1MDUyMS0yMWFhLTRiYmItOWNjYy1kZGVmMDAxMTIyMzMiLCJzdWIiOiJsb2NhbGhvc3QiLCJyb29tIjoiKiIsImV4cCI6MTc0Nzg2MzIyOCwiaWF0IjoxNzQ3ODU5NjI4fQ.78K1Bhe6XTQDV9hICb03wl4Rqn3T3HtO5ZpbcIaO0V8'
            roomName={roomName}
            configOverwrite={jitsiConfig}
            interfaceConfigOverwrite={jitsiInterfaceConfig}
            userInfo={{
              displayName: name,
              email: email,
            }}
            getIFrameRef={(iframeRef) => {
              iframeRef.style.height = '600px';
            }}
            onApiReady={(externalApi) => {
              // Handle API ready event
              externalApi.executeCommand('displayName', name);
              externalApi.executeCommand('email', email);

              // Disable video on join
              externalApi.executeCommand('toggleVideo');

              // Additional voice-only configurations via API
              externalApi.executeCommand('setVideoQuality', 0);
              externalApi.addEventListener('videoConferenceJoined', () => {
                externalApi.executeCommand('startAudioOnly');
              });
              externalApi.addEventListener('videoConferenceLeft', () => {
                handleLeaveMeeting();
                // Place your code here that should execute when the user leaves
                // For example, cleanup tasks, navigation, or state updates
              });
            }}
          />
          {/* <button onClick={handleLeaveMeeting} className='leave-btn'>
            Leave Meeting
          </button> */}
          <div className='voice-only-indicator'>Voice Only Conference</div>
        </div>
      }
    </div>
  );
};

export default JitsiMeetComponent;

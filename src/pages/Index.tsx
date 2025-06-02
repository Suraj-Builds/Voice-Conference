
import React, { useState, useEffect } from 'react';
import { hasUserInfo } from '@/utils/sessionStorage';
import UserInfoForm from '@/components/UserInfoForm';
import MeetingsDisplay from '@/components/MeetingsDisplay';

const Index = () => {
  const [showMeetings, setShowMeetings] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user info exists in session storage
    const userInfoExists = hasUserInfo();
    setShowMeetings(userInfoExists);
    setIsLoading(false);
  }, []);

  const handleUserInfoSubmit = () => {
    setShowMeetings(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {showMeetings ? (
        <MeetingsDisplay />
      ) : (
        <UserInfoForm onSubmit={handleUserInfoSubmit} />
      )}
    </>
  );
};

export default Index;

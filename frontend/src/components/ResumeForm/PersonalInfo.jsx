import React from 'react';
import { useFormContext } from 'react-hook-form';
import { UserIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, LinkIcon } from '@heroicons/react/24/outline';

const PersonalInfo = () => {
  const { register } = useFormContext();
  return (
    <div className="card-premium space-y-6">
      <h3 className="text-2xl font-semibold flex items-center gap-2">
        <UserIcon className="h-6 w-6 text-indigo-500" />
        Personal Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative">
          <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input {...register('personalInfo.fullName')} placeholder="Full Name" className="input-premium pl-11" />
        </div>
        <div className="relative">
          <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input {...register('personalInfo.email')} placeholder="Email" className="input-premium pl-11" />
        </div>
        <div className="relative">
          <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input {...register('personalInfo.phone')} placeholder="Phone" className="input-premium pl-11" />
        </div>
        <div className="relative">
          <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input {...register('personalInfo.address')} placeholder="Address" className="input-premium pl-11" />
        </div>
        <div className="relative">
          <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input {...register('personalInfo.linkedin')} placeholder="LinkedIn URL" className="input-premium pl-11" />
        </div>
        <div className="relative">
          <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input {...register('personalInfo.github')} placeholder="GitHub URL" className="input-premium pl-11" />
        </div>
        <div className="relative md:col-span-2">
          <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input {...register('personalInfo.portfolio')} placeholder="Portfolio URL" className="input-premium pl-11" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
import React from 'react';

const ProfileCard = ({ profile, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer border rounded-lg p-4 shadow hover:shadow-lg transition max-w-sm w-full bg-white"
  >
    <div className="flex items-center space-x-4">
      <img
        src={profile.avatar}
        alt={profile.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <div className="text-xl font-semibold">{profile.name}, {profile.age}</div>
        <div className="text-sm text-gray-500 italic">{profile.tagline}</div>
      </div>
    </div>

    <div className="mt-4">
      <p className="text-gray-700">{profile.description}</p>
    </div>

    <div className="mt-4">
      <p className="font-semibold text-sm text-gray-600">Location:</p>
      <p className="text-sm text-gray-800">{profile.location}</p>
    </div>

    <div className="mt-4">
      <p className="font-semibold text-sm text-gray-600 mb-1">Hobbies:</p>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
        {profile.hobbies.map((hobby, index) => (
          <li key={index}>
            <strong>{hobby.title}:</strong> {hobby.description}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ProfileCard;

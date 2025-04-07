import React, { useState } from 'react';
import { Carousel, Modal } from 'flowbite-react';
import  profiles  from './data/PofileData';
import ProfileCard from './components/ProfileCard';

export default function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className="space-y-16 bg-[#fff7f0] min-h-screen">
      {/* Hero Carousel */}
      <section className="w-full">
        <div className="h-64 md:h-96">
          <Carousel slideInterval={4000} className="rounded-none">
            <img src="/sample-image.webp" alt="Slide 1" className="w-full h-full object-cover" />
            <div className="flex items-center justify-center h-full bg-blue-100">
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Featured Profiles</h2>
                <p className="text-lg md:text-xl text-gray-600">
                  Curated with care to spark meaningful connections
                </p>
              </div>
            </div>
            <div className="flex h-full items-center justify-center gap-4 bg-white px-4">
              <img src="/sample-image.webp" className="w-1/2 object-contain" alt="Slide 3" />
              <p className="text-xl max-w-md text-gray-700">
                Meet individuals with shared passions and inspiring stories.
              </p>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="px-4">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Featured Profiles</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              onClick={() => setSelectedProfile(profile)}
              className="cursor-pointer w-full max-w-sm border border-orange-300 rounded-lg p-6 bg-white shadow hover:shadow-md transition"
            >
              <div className="flex flex-col items-center">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-800">{profile.name}</h4>
                  <p className="text-gray-600 text-sm">{profile.age}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-sm text-gray-700 mb-2">Hobbies</p>
                {profile.hobbies.map((hobby, i) => (
                  <p key={i} className="text-sm text-gray-600 mb-1">
                    <strong>{hobby.title}</strong> {hobby.description}
                  </p>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-700">
                <p className="font-medium text-gray-800">{profile.location}</p>
                <p>{profile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProfile && (
        <Modal show={true} onClose={() => setSelectedProfile(null)}>
          <Modal.Header>
            {selectedProfile.name}, {selectedProfile.age}
          </Modal.Header>
          <Modal.Body>
            <div className="text-center space-y-4">
              <img
                src={selectedProfile.avatar}
                alt={selectedProfile.name}
                className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
              />
              <p className="text-lg font-medium italic text-gray-600">{selectedProfile.tagline}</p>
              <p className="text-sm text-gray-800">{selectedProfile.description}</p>
              <div>
                <p className="font-semibold text-sm">Location:</p>
                <p className="text-sm text-gray-700">{selectedProfile.location}</p>
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Hobbies:</p>
                <ul className="list-disc list-inside text-sm text-left text-gray-700">
                  {selectedProfile.hobbies.map((hobby, idx) => (
                    <li key={idx}>
                      <strong>{hobby.title}:</strong> {hobby.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

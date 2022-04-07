import React from 'react';
import StoryCard from './StoryCard';

const stories = [
  {
    id: 1,
    name: 'Shakil Ahammed',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    id: 2,
    name: 'Shakil Ahammed',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    id: 3,
    name: 'Shakil Ahammed',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    id: 4,
    name: 'Shakil Ahammed',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    id: 5,
    name: 'Shakil Ahammed',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/kxk',
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;

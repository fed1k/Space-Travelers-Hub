import React from 'react';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

export const createMission = async (mission) => {
  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: mission_id,
      mission: mision_name,
      about: description,
    }),
  });
  const data = await res.text();
  return data;
};

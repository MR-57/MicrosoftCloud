import { AzureCommunicationTokenCredential, CommunicationUserIdentifier } from '@azure/communication-common';
import {  
  CallComposite, 
  fromFlatCommunicationIdentifier, 
  useAzureCommunicationCallAdapter 
} from '@azure/communication-react';
import React, { useState, useMemo, useEffect } from 'react';
import './App.css';

const App = () => { 
  const displayName = 'Guest'
  const [userId, setUserId] = useState<string>('8:acs:3358656f-a93f-4d83-a467-f7a654d07259_0000001c-c059-d1de-6ba8-473a0d0000a2');
  const [token, setToken] = useState<string>('eyJhbGciOiJSUzI1NiIsImtpZCI6IjVFODQ4MjE0Qzc3MDczQUU1QzJCREU1Q0NENTQ0ODlEREYyQzRDODQiLCJ4NXQiOiJYb1NDRk1kd2M2NWNLOTVjelZSSW5kOHNUSVEiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjMzNTg2NTZmLWE5M2YtNGQ4My1hNDY3LWY3YTY1NGQwNzI1OV8wMDAwMDAxYy1jMDU5LWQxZGUtNmJhOC00NzNhMGQwMDAwYTIiLCJzY3AiOjE3OTIsImNzaSI6IjE3MDEzNTE3OTYiLCJleHAiOjE3MDE0MzgxOTYsInJnbiI6ImZyIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiMzM1ODY1NmYtYTkzZi00ZDgzLWE0NjctZjdhNjU0ZDA3MjU5IiwicmVzb3VyY2VMb2NhdGlvbiI6ImZyYW5jZSIsImlhdCI6MTcwMTM1MTc5Nn0.PSO5W1aHlTvIOs0F9DX-wh2Y3yXJDJjkHYhBm2-_iKOg0KyPkYlZp_rXVEDUU9qnoteQ6f4F6lJi72WHfUvOdxDfu7qkMfCZJNKmWa1lyZy07_R0GQHXT4FfCp3pqcmF2QHEWorknu5r_PPJsACLd0DQRUdWuVReUUIuHnSB1RUvb426EHiSexUPKLVIxXUAVJh_4su_alYP8HfcHlY7kuuJZtNm1LdWloE1BQYa2lWjeLMTc-Lhr8mdDkEgo8qG7UqmrYXRH3hrCFBjR7vooTBkdnY2OFQyYarEHB0xNTeXp5H1Bzp3pAaNE2bvoZ-BP1VItko11TC00vqrLXuf3Q');
    const [teamsMeetingLink, setTeamsMeetingLink] = useState<string>('https://teams.microsoft.com/l/meetup-join/19%3ameeting_OTE5NzEzYjctY2FmZi00MWY3LWI5MTMtODUzYjZkOWM0ZDQ5%40thread.v2/0?context=%7b%22Tid%22%3a%224528741f-a7d3-4bb8-9f27-b54a79e69309%22%2c%22Oid%22%3a%22e76d2dba-7ad3-4212-89a6-595769beb774%22%7d');
  const [message, setMessage] = useState<string>('');
  const credential = useMemo(() => {
    if (token) {
      return new AzureCommunicationTokenCredential(token)
    }
    return;
    }, [token]);

  const callAdapterArgs = useMemo(() => {
    if (userId && credential && displayName && teamsMeetingLink) {
      return {
        userId: fromFlatCommunicationIdentifier(userId) as CommunicationUserIdentifier,
        displayName,
        credential,
        locator: { meetingLink: teamsMeetingLink },
      }
    }
    return {};
  }, [userId, credential, displayName, teamsMeetingLink]);

  const callAdapter = useAzureCommunicationCallAdapter(callAdapterArgs);

  useEffect(() => {
    const init = async () => {
        /* Commenting out for now
        setMessage('Getting ACS user');
        //Call Azure Function to get the ACS user identity and token
        const res = await fetch(process.env.REACT_APP_ACS_USER_FUNCTION as string);
        const user = await res.json();
        setUserId(user.userId);
        setToken(user.token);*/
        

        setMessage('Getting Teams meeting link...');
        //Call Azure Function to get the meeting link
        const resTeams = await fetch(process.env.REACT_APP_TEAMS_MEETING_FUNCTION as string);
        const link = await resTeams.text();
        setTeamsMeetingLink(link);
        setMessage('');
        console.log('Teams meeting link', link);

    }
    init();
  }, []);

  if (callAdapter) {
    return (
      <div>
        <h1>Contact Customer Service</h1>
        <div className="wrapper">
          <CallComposite
            adapter={callAdapter}
          />
        </div>
      </div>
    );
  }
  if (!credential) {
    return <>Failed to construct credential. Provided token is malformed.</>;
  }
  if (message) {
    return <div>{message}</div>;
  }
  return <div>Initializing...</div>;
};

export default App;
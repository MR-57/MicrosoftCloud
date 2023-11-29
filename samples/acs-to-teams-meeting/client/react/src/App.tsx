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
  const [userId, setUserId] = useState<string>('8:acs:3358656f-a93f-4d83-a467-f7a654d07259_0000001c-aff2-366e-59fe-ad3a0d0083f0');
  const [token, setToken] = useState<string>('eyJhbGciOiJSUzI1NiIsImtpZCI6IjVFODQ4MjE0Qzc3MDczQUU1QzJCREU1Q0NENTQ0ODlEREYyQzRDODQiLCJ4NXQiOiJYb1NDRk1kd2M2NWNLOTVjelZSSW5kOHNUSVEiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjMzNTg2NTZmLWE5M2YtNGQ4My1hNDY3LWY3YTY1NGQwNzI1OV8wMDAwMDAxYy1hZmYyLTM2NmUtNTlmZS1hZDNhMGQwMDgzZjAiLCJzY3AiOjE3OTIsImNzaSI6IjE3MDEwNzY1NzAiLCJleHAiOjE3MDExNjI5NzAsInJnbiI6ImZyIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiMzM1ODY1NmYtYTkzZi00ZDgzLWE0NjctZjdhNjU0ZDA3MjU5IiwicmVzb3VyY2VMb2NhdGlvbiI6ImZyYW5jZSIsImlhdCI6MTcwMTA3NjU3MH0.M4PE8Uv98x4qDSDKVkXWK7Jptawv6LU6JuYJ_EMlTLJdqg7B9GIu3d1DkSctA0x6KEzxzTafYuyMjp40ShixPgnJYswJYIcuK2emIucjOtbyKK0ndOXNda-4xSs0FKYZhwMo8hv0L1tR1JtlB4dfSGpN8q2lWwMjcITNdOSLGFauWetf70YFGca5Shwh4NcevmIF9EOzCU9IaOOjcqz07kOa7toc-yg1pi2SjipXCZLvScM52JleJFIMFIexVwTLDqHHItlY_WxUOtnVRTZOzQ63p8EziG5qQhNN3sJJw9gUVAoG06byKIV-o66-5JHXdEXRuccC_H8ep9iYt504_A');
  const [teamsMeetingLink, setTeamsMeetingLink] = useState<string>('');
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
        setToken(user.token);
        */

        setMessage('Getting Teams meeting link...');
        //Call Azure Function to get the meeting link
        const resTeams = await fetch(process.env.REACT_APP_TEAMS_MEETING_FUNCTION as string);
        const link = await resTeams.text();
        console.log(link);
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
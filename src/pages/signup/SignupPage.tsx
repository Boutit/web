import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../design/web/interactive/Button';
import { TextInput } from '../../design/web/interactive/TextInput';
import { Box } from '../../design/web/layout/Box';
import NavLink from '../../design/web/navigation/NavLink';
import { TextBody } from '../../design/web/typography/TextBody';
import { TextTitle1 } from '../../design/web/typography/TextTitle1';

const SignupPage = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handlePhoneOrEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhoneOrEmail(e.target.value);
    },
    [],
  );

  const fetchGraphQL = async (text: string) => {
    const response = await fetch('http://localhost:8090/graphql', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify({
        query: text,
      }),
    });

    // Get the response as JSON
    return await response.json();
  };

  const onSubmit = useCallback(() => {
    fetchGraphQL(`
      query findTodos {
        todos {
          text
          done
          user {
            name
          }
        }
      }
    `)
      .then(response => {
        console.log('RESPONSE!', response);
      })
      .catch(error => {
        console.error('ERRORZ', error);
      });
    // navigate('/home');
  }, []);

  return (
    <Box
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
    >
      <Box borderRadius="standard" spacing={4} minWidth={400}>
        <Box alignItems="center" spacingBottom={1}>
          <TextTitle1 as="div">b</TextTitle1>
        </Box>
        <Box alignItems="center" spacingBottom={4}>
          <TextBody as="div">For the remote world</TextBody>
        </Box>
        <TextInput
          bordered
          borderRadius="input"
          onChange={handlePhoneOrEmailChange}
          padding={2}
          placeholder="Phone or Email"
          spacingBottom={1}
        />
        <TextInput
          bordered
          borderRadius="input"
          onChange={handlePhoneOrEmailChange}
          padding={2}
          placeholder="Full Name"
          spacingBottom={1}
        />
        <TextInput
          bordered
          borderRadius="input"
          padding={2}
          placeholder="Username"
          spacingBottom={1}
        />
        <TextInput
          bordered
          borderRadius="input"
          padding={2}
          placeholder="Password"
          spacingBottom={3}
        />
        <Button
          bordered
          borderRadius="round"
          onClick={onSubmit}
          padding={2}
          spacingBottom={3}
          text="Sign up"
        />
        <Box flexDirection="row" justifyContent="center">
          <TextBody as="div" spacingRight={1}>
            Have an account?
          </TextBody>
          <NavLink to="/login">
            <TextBody as="div">Login</TextBody>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPage;

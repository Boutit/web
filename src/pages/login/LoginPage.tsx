import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../design/web/interactive/Button';
import { TextInput } from '../../design/web/interactive/TextInput';
import { Box } from '../../design/web/layout/Box';
import { TextBody } from '../../design/web/typography/TextBody';
import { TextTitle4 } from '../../design/web/typography/TextTitle4';
import { TextTitle3 } from '../../design/web/typography/TextTitle3';
import NavLink from '../../design/web/navigation/NavLink';

const SignupPage = () => {
  const [phoneOrEmail, setPhoneOrEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handlePhoneOrEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhoneOrEmail(e.target.value);
    },
    [],
  );

  return (
    <Box
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
    >
      <Box borderRadius="standard" spacing={4} minWidth={400}>
        <Box alignItems="center" spacingBottom={3}>
          <TextTitle4 as="div">Login</TextTitle4>
        </Box>
        <TextInput
          bordered
          borderRadius="input"
          onChange={handlePhoneOrEmailChange}
          padding={2}
          placeholder="Phone, Email or Username"
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
          padding={2}
          spacingBottom={3}
          text="Login"
        />
        <Box flexDirection="row" justifyContent="center">
          <TextBody as="div" spacingRight={1}>
            Need an account?
          </TextBody>
          <NavLink to="/">
            <TextBody as="div">Sign up</TextBody>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPage;

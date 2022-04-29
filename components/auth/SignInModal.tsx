import Link from '@components/common/Link';
import Box from '@components/common/Box';
import Button from '@components/common/Button';
import Checkbox from '@components/common/Checkbox';
import Input from '@components/common/Input';
import Typography from '@components/common/Typography';
import Wrapper from '@components/common/Wrapper';
import useInput from '@hooks/useInput';
import { useState } from 'react';
import useSigninMutation from '@hooks/useSigninMutation';

const NormalSignInModal = () => {
  const { value: email, onChange: onEmailChange } = useInput('');
  const { value: pwd, onChange: onPwdChange } = useInput('');
  const [checked, setChecked] = useState(true);
  const { mutate: signinMutate, isLoading, isError, error, isSuccess } = useSigninMutation({ email, password: pwd });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    signinMutate();
    location.href = '/';
    console.log(email, pwd);
  };

  return (
    <Box width={500} height={550}>
      <Wrapper flexDirection={'row'} gap={{ rowGap: 20 }}>
        <Typography size={'lg'} color={'black'} weight={'BOLD'}>
          🌳 그루터기 로그인
        </Typography>
        <Wrapper flexDirection={'column'} gap={{ rowGap: 15 }}>
          <Typography size={'lg'} color={'darkgray'}>
            인생선배를 찾는 지름길,
          </Typography>
          <Typography size={'lg'} color={'darkgray'}>
            그루터기
          </Typography>
        </Wrapper>
      </Wrapper>
      <Wrapper flexDirection={'column'} gap={{ rowGap: 20 }}>
        <Input placeholder={'이메일'}></Input>
        <Input type={'password'} placeholder={'비밀번호'}></Input>
        <Checkbox label={'로그인 유지'}></Checkbox>
        <Button color={'primary'} fontColor={'black'} borderColor={'none'} name={'로그인'} size={'lg'} />
      </Wrapper>
      <Wrapper flexDirection={'row'} gap={{ columnGap: 1 }} justifyContent={'center'}>
        <Typography size={'xs'} color={'black'} align={'center'}>
          아직 회원이 아니신가요?
        </Typography>
        <Link href={'/auth/signup'} size={'xs'} color={'primary'} weight={'REGULAR'}>
          회원가입하기
        </Link>
      </Wrapper>
    </Box>
  );
};

export default NormalSignInModal;

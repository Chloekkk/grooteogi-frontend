import { useState } from 'react';
import Title from '@components/common/Title';
import Layout from '@components/mypage/layout';
import MyPageCard from '@components/mypage/MyPageCard';
import Button from '@components/common/Button';
import Textarea from '@components/common/Textarea';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import FullHeart from '../../../public/icons/full_heart.svg';
import Typography from '@components/common/Typography';
import Content from '@components/mypage/Content';
import { Field, Formik } from 'formik';
import { useRouter } from 'next/router';
import useReservation from '@components/mypage/useReservation';
import reservation from '@lib/api/reservation';

const ReviewPage = () => {
  const router = useRouter();
  const reservationId = router.query.reservationId as string;
  const { reservation: reservationData } = useReservation(reservationId);

  if (!reservationData) return <div>Loading</div>;
  return (
    <Content title={'리뷰 등록'}>
      <Layout.listWrapper>
        <Layout.myPageItem>
          <MyPageCard reservation={reservationData} />
          <Layout.heatBox>
            <FullHeart />
          </Layout.heatBox>
        </Layout.myPageItem>
        <Formik
          initialValues={{ score: 5, text: '' }}
          onSubmit={async values => {
            const data = {
              postId: reservationData?.postId,
              reservationId,
              ...values,
            };
            const response = await reservation.createReview(data);
            if (response.status === 200) {
              alert('리뷰가 작성되었습니다.');
              router.back();
            }
            console.log('values', values);
          }}
        >
          {({ setFieldValue, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Layout.inputListBox>
                <Layout.inputListItem>
                  <Title size={'h3'} color={'black'}>
                    오늘의 약속은 어떘나요?
                  </Title>
                  <Rate allowHalf defaultValue={5} onChange={value => setFieldValue('score', value)} />
                </Layout.inputListItem>
                <Layout.inputListItem>
                  <Title size={'h3'} color={'black'}>
                    어떤 점이 좋았나요?
                  </Title>
                  <Field id="text" name="text" component={Textarea} />
                </Layout.inputListItem>
                <Button name={'완료하기'} color={'primary'} fontColor={'white'} size={'lg'} />
              </Layout.inputListBox>
            </form>
          )}
        </Formik>
      </Layout.listWrapper>
    </Content>
  );
};

export default ReviewPage;

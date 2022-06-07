import { FilterType } from './../../types/enum';
import { ReservationCreateRequestDto } from '../../types/request';
import { ReservationEntity } from 'types/entity';
import client from './client';

const reservation = {
  createReservation: async (data: ReservationCreateRequestDto) => {
    const url = '/reservation';
    return await client.post(url, data);
  },
  sendMessage: async (phoneNumber: string) => {
    const url = `/reservation/sms/send?phoneNumber=${phoneNumber}`;
    return await client.post(url, {});
  },
  confirmMessage: async (data: { phoneNumber: string; code: string }) => {
    const url = '/reservation/sms/check';
    return await client.post(url, data);
  },
  resendMessage: async (reservation: ReservationEntity) => {
    const url = '/reservation/send-sms';
    return await client.post(url, reservation);
  },
  getReservation: async (reservationId: string) => {
    const url = `/reservation/${reservationId}`;
    return await client.get(url);
  },
  getReservationList: async (isHost: boolean, filter: keyof typeof FilterType) => {
    const url = filter === 'ALL' ? `/reservation?isHost=${isHost}` : `/reservation?isHost=${isHost}&filter=${filter}`;
    return await client.get(url);
  },
  deleteReservation: async (reservationId: number | string) => {
    const url = `/reservation/${reservationId}`;
    return client.delete(url, {});
  },
  createReview: async (data: {
    postId: string | number;
    reservationId: string | number;
    text: string;
    score: number;
  }) => {
    const url = '/review';
    return client.post(url, data);
  },
};

export default reservation;

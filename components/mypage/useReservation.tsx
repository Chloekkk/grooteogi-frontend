import reservation from '@lib/api/reservation';
import { useQuery } from 'react-query';
import { ReservationListResponseDto } from 'types/response';

const useReservation = (reservationId: string) => {
  const { isLoading, data, error } = useQuery<ReservationListResponseDto>(
    ['reservation', reservationId],
    async () => (await reservation.getReservation(reservationId)).data,
  );
  console.log('reservation', data);
  return { isLoading, reservation: data, error };
};

export default useReservation;

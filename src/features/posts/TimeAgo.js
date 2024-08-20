import { parseISO,formatDistanceToNow } from "date-fns"

const TimeAgo = ({timestamp}) => {

    let timeAgo='';

    if(timeAgo){
        const date=parseISO(timestamp);
        const timePeriod=formatDistanceToNow(date);
        timeAgo=`${timePeriod} ago`
    }

  return (
    <span title={timestamp}>
        &nbsb; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo
import IconStar from 'src/components/IconStar'
import { config } from 'src/constants/config'
import { Review as ReviewType } from 'src/types/review.type'

interface Props {
  review?: ReviewType
}
export default function Review({ review }: Props) {
  const avatar = review?.author_details.avatar_path
    ? `${config.imageW500URL}${review?.author_details.avatar_path}`
    : config.defaultCastImg
  return (
    <div className='my-4 p-4 border-[1px] border-gray-600 rounded-lg'>
      <div className='flex items-center mb-4'>
        <img className='w-10 h-10 me-4 rounded-full' src={avatar} alt='author_img' />
        <div className='font-medium dark:text-white'>
          <p>{review?.author_details.name || review?.author_details.username}</p>
          <div className='flex items-center flex-wrap gap-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <div className='flex items-center gap-x-1'>
              {review?.author_details.rating} <IconStar />
            </div>
            <p>on March 3, 2017</p>
          </div>
        </div>
      </div>
      <div>
        <p className='mb-2 text-gray-500 dark:text-gray-400 line-clamp-3'>{review?.content}</p>
      </div>
    </div>
  )
}

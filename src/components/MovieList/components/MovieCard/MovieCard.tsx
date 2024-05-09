import Button from '../../../Button'
import IconPlay from '../../../IconPlay'
import IconStar from '../../../IconStar'

export default function MovieCard() {
  return (
    <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 p-3 bg-slate-800 rounded-lg text-white'>
      <div className='w-full h-[250px] overflow-hidden rounded-lg'>
        <img
          src='https://image.tmdb.org/t/p/w500//kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg'
          alt=''
          className='w-full h-full rounded-lg object-cover'
        />
      </div>
      <h3 className='text-xl font-bold'>The Shawshank Redemption</h3>
      <div className='mt-2 flex items-center justify-between text-gray-400 text-sm'>
        <span>1994</span>
        <div className='flex items-center gap-x-2'>
          <span>8.704</span>
          <IconStar />
        </div>
      </div>
      <Button
        title='Watch'
        titleClassName='text-sm sm:text-base'
        className='mt-4 gap-x-1 py-2 sm:px-8 rounded-lg bg-primary justify-center hover:cursor-pointer hover:bg-primary/80'
        icon={<IconPlay />}
      />
    </div>
  )
}

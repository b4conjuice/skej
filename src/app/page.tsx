import { Main, Title } from '@/components/ui'

const posts = [
  {
    title: 'Post 1',
    date: 'Tue May 7 @ 5:30PM',
    type: 'cart',
    people: ['tony', 'steve'],
  },
  {
    title: 'Post 2',
    date: 'Tue May 7 @ 5:30PM',
    type: 'zoom',
    people: ['tony', 'steve'],
  },
  {
    title: 'Post 3',
    date: 'Tue May 7 @ 5:30PM',
    type: 'house to house',
    people: ['tony', 'steve'],
  },
  {
    title: 'Post 4',
    date: 'Tue May 7 @ 5:30PM',
    type: 'study',
    people: ['tony', 'steve'],
  },
]

export default function Home() {
  return (
    <Main className='flex flex-col p-4'>
      <div className='flex flex-grow flex-col items-center space-y-4'>
        <Title>skej</Title>
        <ul className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map(post => (
            <li key={post.title}>
              <div className='bg-cobalt flex flex-col items-center justify-center space-y-2 rounded-lg p-4'>
                <div className='text-xl font-bold'>{post.title}</div>
                <div className='text-sm'>{post.date}</div>
                {post.people && post.people.length > 0 && (
                  <ul className='flex flex-row items-center space-x-4'>
                    {post.people.map(person => (
                      <li key={person} className='text-sm font-bold'>
                        {person}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Main>
  )
}

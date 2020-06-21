export default {
  path:'/home',
  component : () => import('@/views/Home'),
  children : [
    {
      path : 'city',
      component : () => import('@/components/city')
    }
  ]
}
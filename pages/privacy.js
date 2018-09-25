import Privacy from '../components/privacy/Privacy'
import Head from '../components/Head'

const PrivacyPage = props => {
  return (
    <main>
      <Head title='Privacy - Canopy' />
      <Privacy />
      <style jsx>{`
        main {
          width: 80%;
          margin: auto;
        }  
      `}</style>
    </main>
  )
}

export default PrivacyPage

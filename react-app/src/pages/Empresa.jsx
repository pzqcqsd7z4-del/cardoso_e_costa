import PageHeader from '../components/PageHeader'
import History from '../components/History'
import Values from '../components/Values'
import Team from '../components/Team'
import CtaBanner from '../components/CtaBanner'
import { Link } from 'react-router-dom'

export default function Empresa() {
  return (
    <>
      <PageHeader eyebrow="Quem Somos" title="Empresa" />

      <History />
      <Values />
      <Team />
      <CtaBanner />
    </>
  )
}

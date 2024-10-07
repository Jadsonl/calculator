import { TeclaContainer } from './styles'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
}
export function IconComponent({ Icon, ...res }: IconProps) {
  return (
    <TeclaContainer>
      <Icon {...res} />
    </TeclaContainer>
  )
}

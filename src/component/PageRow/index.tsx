import { Checkbox, Row } from "./style";

interface PageRowProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function PageRow({ label, checked, onChange }: PageRowProps) {
  return (
    <Row>
      <span>{label}</span>
      <Checkbox checked={checked} onChange={onChange} />
    </Row>
  );
}

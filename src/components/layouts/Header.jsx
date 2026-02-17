import Menu from "../ui/menu";

export default function Header() {
  return (
    <div className="flex justify-between p-4  border border-coolGray-200 h-14">
      <div className="grow text-center">Tennis Store</div>
      <Menu />
    </div>
  );
}

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 font-Roboto">
      <h1 className="font-bold max-sm:text-sm">Leonardo Augusto</h1>
      <div className="flex justify-center gap-5 font-semibold max-sm:text-sm">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </div>
    </header>
  )
}
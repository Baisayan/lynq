export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4">
        <text>Lynq</text>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lynq. Built for teams who ship.
          </p>
        </div>
      </div>
    </footer>
  );
}

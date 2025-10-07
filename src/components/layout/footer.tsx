export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Creative Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-4 text-center text-sm text-slate-600">
      © {new Date().getFullYear()} CloudLMS. All rights reserved.
    </footer>
  );
}

export function SectionHeader({ title, description }) {
  return (
    <div className="space-y-2 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-[700px]   ">
          {description}
        </p>
      )}
    </div>
  );
}
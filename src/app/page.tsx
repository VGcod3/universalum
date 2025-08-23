import { HeroSlider } from "@/components/universal/HeroSlider";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8">
      {/* Hero slider section */}
      <HeroSlider />

      {/* Additional content to enable scrolling */}
      <section className="w-full max-w-4xl mx-auto py-16">
        <h2 className="text-headline-3 mb-8">
          Scroll down to see the header blur effect
        </h2>

        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="mb-12">
            <h3 className="text-headline-4 mb-4">Section {i}</h3>
            <p className="text-body-1 mb-4">
              This is a sample section to demonstrate the blurring header effect
              as you scroll down the page. The header should remain fixed at the
              top and will get a blur effect applied to its background once you
              scroll past the top of the page.
            </p>
            <p className="text-body-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
              nulla enim.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

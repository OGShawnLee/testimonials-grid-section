<script>
  import { Testimonial } from '@components';
  import { daniel, kira, jonathan, jeanette, patrick, quotation } from '@assets';
</script>

<main class="max-w-xs my-16 mx-auto | sm:max-w-lg md:max-w-2xl lg:max-w-3xl @xl:my-4 xl:max-w-6xl">
  <h1 class="sr-only">Testimonials</h1>
  <div class="grid gap-6 | xl:grid-cols-4">
    <Testimonial
      class="relative bg-violet md:col-span-2"
      name="Danel Clifford"
      image={daniel}
      isDark>
      <img class="absolute top-0 right-6 sm:right-24" src={quotation} alt="" />
      <strong class="relative text-white z-10">
        I received a job offer mid-course, and the subjects I learned were current, if not more so,
        in the company I joined. I honestly feel I got every penny's worth.
      </strong>
      <blockquote>
        <p class="text-sm text-white/70">
          “ I was an EMT for many years before I joined the bootcamp. I've been looking to make a
          transition and have heard some people who had an amazing experience here. I signed up for
          the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next
          12 weeks was the best - and most grueling - time of my life. Since completing the course,
          I've successfully switched careers, working as a Software Engineer at a VR startup. ”
        </p>
      </blockquote>
    </Testimonial>
    <Testimonial class="bg-blue-grayish" name="Jonathan Walters" image={jonathan} isDark>
      <strong class="text-white"> The team was very supportive and kept me motivated </strong>
      <blockquote>
        <p class="text-sm text-white/70">
          “ I started as a total newbie with virtually no coding skills. I now work as a mobile
          engineer for a big company. This was one of the best investments I've made in myself. ”
        </p>
      </blockquote>
    </Testimonial>
    <Testimonial class="bg-white md:order-4" name="Jeanette Harmon" image={jeanette}>
      <strong class="text-blue-grayish"> An overall wonderful and rewarding experience </strong>
      <blockquote>
        <p class="text-sm text-blue-grayish/70">
          “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good
          living while doing something I love. ”
        </p>
      </blockquote>
    </Testimonial>
    <Testimonial
      class="bg-blue-blackish md:(col-span-2 order-5)"
      name="Patrick Abrams"
      image={patrick}
      isDark>
      <strong class="text-gray-light">
        Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from
        them and learning from their experiences was easy.
      </strong>
      <blockquote>
        <p class="test-sm text-gray-light/70">
          “ The staff seem genuinely concerned about my progress which I find really refreshing. The
          program gave me the confidence necessary to be able to go out in the world and present
          myself as a capable junior developer. The standard is above the rest. You will get the
          personal attention you need from an incredible community of smart and amazing people. ”
        </p>
      </blockquote>
    </Testimonial>
    <Testimonial class="bg-white md:(order-3 row-span-2)" name="Kira Whittle" image={kira}>
      <strong class="text-blue-grayish">
        Such a life-changing experience. Highly recommended!
      </strong>
      <blockquote>
        <p class="text-sm text-blue-grayish/70">
          “ Before joining the bootcamp, I've never written a line of code. I needed some structure
          from professionals who can help me learn programming step by step. I was encouraged to
          enroll by a former student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very hands-on and I never
          had to wait long for assistance. The agile team project, in particular, was outstanding.
          It took my learning to the next level in a way that no tutorial could ever have. In fact,
          I've often referred to it during interviews as an example of my developent experience. It
          certainly helped me land a job as a full-stack developer after receiving multiple offers.
          100% recommend! ”
        </p>
      </blockquote>
    </Testimonial>
  </div>
</main>

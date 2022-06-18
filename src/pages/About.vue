<template>
  <Layout>
    <PageHeader :page="$t(title)" />
    <section class="about">
      <!-- {{ $t('welcome') }} -->
      <h3>
        My, Myself & I
      </h3>
      <p>
        What can a “full-stack developer” do, you ask?
      </p>
      <p>
        I can conjur a website from nothing into existence, fully formed. I do
        not use tricks, nor is this magic. I specialize in manipulating the very
        fabric of the web, its raw materials of HTML, CSS, JavaScript, and SVG.
        Linux servers serve me, domains are my domain, and certificates are
        certain.
      </p>
      <p>
        I can plan, design, build, launch, and maintain an API myself — did I
        mention that I build backend apps too? I have worked 10+ years on a lot
        of published project and now seek about new horizon in the Cloud.
      </p>
      <p>
        A full-stack developer knows no bounds. And when they find one they
        cross it without hesitation, boldly going into the unknown to return
        richer for it.
      </p>
    </section>
  </Layout>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ThoughtList from "@/components/ThoughtList";

export default {
  components: {
    PageHeader,
    ThoughtList,
  },
  metaInfo: {
    title: "A simple blog",
  },
  data() {
    return {
      title: "about",
    };
  },
};
</script>

<page-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</page-query>

<style></style>

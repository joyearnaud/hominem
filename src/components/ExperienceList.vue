<template>
 <!-- experience  -->
    <div class="section" id="experience">
        <div class="container">
            <div class="col-md-12">
                <ul class="timeline">
                    <li class="timeline-event" data-aos="fade-up">
                        <label class="timeline-event-icon"></label>
                        <div class="timeline-event-copy">
                            <p class="timeline-event-thumbnail">
                              <span class="datestart" v-html="experience.datestart" />
                              <span> - </span>
                              <span class="dateend" v-html="experience.dateend" />
                            </p>
                            <h3 >
                              <span class="client" v-html="experience.client" />
                              <span> - </span>
                              <span class="project" v-html="experience.project" />
                              </h3>
                            <h4 class="role" v-html="experience.role" />
                            <p class="content" v-html="experience.content" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- ./experience -->
</template>

<script>
export default {
  props: ["experience"],
};
</script>

<style>
#experience {
    padding: 1px 10px 1px 1px;
}

.experience-row {
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
}

.experience-row h3 {
    font-family: 'Lato', sans-serif;
    text-transform: capitalize;
    letter-spacing: 2px;
    color: #425BB5;
    font-size: 16px;
    font-weight: bold
}

.experience-row p {
    color: #888;
    margin-top: 20px;
    font-size: 15px;
}

.experience-row .date {
    color: #000;
    font-size: 17px;
}

.timeline {
    padding-left: 0;
    list-style: none;
    position: relative;
}

.timeline:before {
    background-color: var(--text-color);
    content: '';
    margin-left: -1px;
    position: absolute;
    top: 0;
    left: 2em;
    width: 2px;
    height: 100%;
}

.timeline-event {
    position: relative;
}

.timeline-event:hover .timeline-event-icon {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    background-color: var(--border-color);
}

.timeline-event:hover .timeline-event-thumbnail {
    box-shadow: inset 40em 0 0 0 var(--border-color);
}

.timeline-event-copy {
    padding-top: 2em;
    padding-left: 2em;
    padding-right: 2em;
    position: relative;
    top: -1.875em;
    left: 4em;
    width: auto;
}

.timeline-event-copy h3 {
    font-size: 1.75em;
}

.timeline-event-copy h4 {
    font-size: 1.2em;
    margin-bottom: 1.2em;
}

.timeline-event-copy strong {
    font-weight: 700;
}

.timeline-event-copy p:not(.timeline-event-thumbnail) {
    padding-bottom: 1.2em;
}

.timeline-event-icon {
    -webkit-transition: -webkit-transform 0.2s ease-in;
    transition: -webkit-transform 0.2s ease-in;
    transition: transform 0.2s ease-in;
    transition: transform 0.2s ease-in, -webkit-transform 0.2s ease-in;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    background-color: var(--border-color);
    outline: 10px solid #f3f3f3;
    display: block;
    margin: 0.5em 0.5em 0.5em -0.5em;
    position: absolute;
    top: 0;
    left: 2em;
    width: 1em;
    height: 1em;
}

.timeline-event-thumbnail {
    -moz-transition: box-shadow 0.5s ease-in 0.1s;
    -o-transition: box-shadow 0.5s ease-in 0.1s;
    -webkit-transition: box-shadow 0.5s ease-in;
    -webkit-transition-delay: 0.1s;
    -webkit-transition: box-shadow 0.5s ease-in 0.1s;
    transition: box-shadow 0.5s ease-in 0.1s;
    color: var(--bkg-color);
    font-size: 12px;
    font-weight: bold;
    background-color: var(--text-color);
    box-shadow: inset 0 0 0 0em var(--text-color);
    display: inline-block;
    margin-top: 0.2em;
    margin-bottom: 1.2em;
    padding: 0.25em 1em 0.2em 1em;
}

.timeline-event-copy p:not(.timeline-event-thumbnail).content {
  padding-bottom: 0.1em;
}
</style>

---
title: 'Making the wait feel shorter'
company: 'Gojek'
year: '2023'
role: 'Senior Product Designer'
tags: ['Super-app', 'Live tracking', 'Design systems']
cover: 'routes'
accent: '#31c458'
summary: 'Redesigning GoFood’s order tracking around honest time estimates and a live map — for millions of daily orders across Indonesia.'
metrics:
  - value: '+22%'
    label: 'Reorder conversion'
  - value: '−18%'
    label: '“Where is my order?” tickets'
  - value: '4'
    label: 'Services adopting the pattern'
order: 2
---

## The problem

The most-used screen in GoFood wasn't the menu — it was the tracking page, refreshed
obsessively by hungry customers. It showed a static progress bar and an estimate that
was wrong often enough that people messaged drivers to ask where they were. Support
logged tens of thousands of "where is my order?" tickets a month.

## The process

We reframed the problem: people don't need the food faster, they need to *trust the
wait*. I designed a tracking screen built on three principles — show real movement
(live driver position on the map), show honest ranges instead of false precision
("12–18 min" not "14 min"), and explain every state change ("Restaurant is busy —
your driver will wait"). I prototyped the motion in Rive and ran it through 40+
usability sessions, then worked with data science to make the estimate ranges match
actual delivery distributions per city.

Because Gojek is a super-app, the win had to travel. I turned the tracking pattern
into a documented component in Aloha, our design system, with slots for each service's
states.

## The outcome

Reorder conversion rose 22% and tracking-related support tickets fell 18% in the first
quarter after launch. The live-tracking pattern was adopted by GoSend, GoMart, and
GoRide within a year — one design, four services.

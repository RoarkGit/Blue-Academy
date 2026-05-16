---
title: E8S (Shiva)
date: 2026-05-16
weight: 2
type: savage-guide
patch: "7.5"
description: "Eden Savage E8S guide: mechanics, strategy, spell recommendations, and positioning."
---

## Overview

This is the second fight in the Eden series and is a colossal step up from
Titan. With a clean run the DPS check isn't too tough thanks to us being able to
abuse {{< spell revenge_blast >}}. However, this fight is still quite long and
requires mechanical consistency above all else.

## Video Guide

{{< youtube id=rNKkrwT7iZc start=967 >}}

## Party Setup

For this fight I would recommend having one tank mimic, one healer mimic, and
six DPS mimics. The damage in this fight is very predictable so solo healing is
fine and adding an additional DPS mimic makes it easier for us to skip Icelit
Dragonsong. The healer will also be acting as the off-tank in this fight and
really won't have much time to be doing damage themselves, so that actually
frees up a lot more spell loadout space for utility spells.

## Utility Spells

- {{< spell diamondback >}}
- {{< spell wild_rage >}} and {{< spell revenge_blast >}} on all DPS
- {{< spell mighty_guard >}}
- {{< spell frog_legs >}} on the off-tank
- {{< spell magic_hammer >}} on at least one person
- {{< spell exuviation >}} on the healer
- A stun spell such as {{< spell faze >}} on one person per add platform
  (explained below)
- An interrupt spell such as {{< spell flying_sardine >}} on one person per add
  platform (explained below)
- {{< spell condensed_libra >}} on the tank. Getting Physical Libra out during
  {{< spell revenge_blast >}} windows adds substantial damage.

## Phase 1: Shiva

Shiva opens up with **Absolute Zero**, a very heavy-hitting raidwide AOE, which
should be mitigated with {{< spell magic_hammer >}} and {{< action addle >}}.
With two 10% mitigations and no {{< spell gobskin >}} this will put everyone
into {{< spell revenge_blast >}} range for when the DPS come out of Waning.

### Mirror, Mirror

Shiva will use **Mirror, Mirror** and spawn three mirrors: one red and two
green. The green mirror will repeat whatever attack Shiva does after a short
delay and the red mirror will repeat the same attack after a longer delay. The
red mirror will be either east or west, while the green mirrors will be north
and east or west (opposite the red mirror). For this next bit it is important
that Shiva be positioned in the center of the arena and facing north!

She will now cast either **Biting Frost**, a 270 degree cleave in front, or
**Driving Frost**, a 90 degree cleave behind. If it is Biting Frost, then we
will move to the south side of the arena on the same side as the red mirror. If
it is Driving Frost, then we will move to the north side of the arena on the
opposite side of the red mirror. I remember this as you **drive** forward, and
**b** as in **biting** just means **backward**. Shiva will cleave, then the
green mirrors will cleave, then the red mirrors will cleave. Once we're in our
starting safe position we need to wait for the green mirrors to cleave and then
run to the opposite side (east/west, but stay north or south). The snapshotting
for this is pretty brutal so don't waste too much time or try to greed as you
*will* be punished.

### Diamond Frost

Shortly after the red mirror goes off we will have our first major raid
mechanic. Shiva will teleport to the center and begin casting **Diamond Frost**.
Stack in the center and have the tank heal everyone up with
{{< spell white_wind >}}. There is about to be a lot of movement, so this is
actually a good time for
DPS to use {{< spell cold_fog >}}. This is also a good time for the off-tank to
use {{< spell frog_legs >}} as it allows them to have a substantial lead in
threat over everyone else, but also gives plenty of time for the tank to
generate a big lead over the off-tank before it becomes important.

Diamond Frost starts with the heavy-hitting raid wide, targets two people with a
Freezing debuff that will root them in place, two people with a flare-style AOE,
and four people with **Frigid Stone**, a mild AOE that explodes as a star-shaped
AOE after a delay. At the same time there will also be "Shiva circles" (as seen
in many other fights) going around the outside. There will also be a **Heavenly
Strike** knockback and **Frigid Eruption** chaser AOEs afterward. The mechanic
has a lot going on visually, but there is some jank that actually makes this a
little bit easier for us:

- The same people will *always* be targeted by the Freezing debuff (assuming no
  deaths).
- The tank *always* gets targeted by a flare, but the other flare is random.
- Getting hit by both flares directly is survivable with
  {{< spell mighty_guard >}}.

There are two ways to solve this mechanic: everyone gets knocked back to the
same side (with {{< spell mighty_guard >}}) or everyone except the tank gets
knocked back to one side while the rest of the party gets knocked back the
opposite direction (without {{< spell mighty_guard >}}). I find it's generally
easiest to just have everyone get knocked back to the same side. Regardless of
which strat you do, the mechanic resolves as follows:

1. Cleanse the Freezing debuff with {{< spell exuviation >}}.
2. Identify the safe knockback side (wherever the Shiva circles initially
   appear, either E/W or N/S).
3. Drop baited AOEs on intercardinal markers on the arena's inner circle (look
   at the lines on the ground).
4. Make sure everyone gets knocked back to the same side (with
   {{< spell mighty_guard >}}) or have the tank get knocked back to their
   own side.
5. Heal up after knockback and flare damage.
6. Dodge ground-targeted AOEs.

Shiva will follow up with Driving Frost or Biting Frost, whichever she didn't
use at the beginning of the fight. The tank should be able to position her such
that the party doesn't really need to think about dodging, but be ready to
dodge, anyway. While this is happening, the DPS should cast
{{< spell wild_rage >}} twice to reduce themselves to 1 HP and then start
spamming {{< spell revenge_blast >}}. You may need to wait for a server tick
to regen some HP before being able to cast the second
{{< spell wild_rage >}}.

Shiva will then use **Double Slap**, a two-hit tankbuster that applies a
Physical Vulnerability Up debuff. If {{< spell diamondback >}} is used just
before the cast finishes then it will cover both hits as well as all
auto-attacks afterwards. If this is inconsistent for your group, you can also do
this with a tank swap or by having the tank cast {{< spell avail >}} on someone
in {{< spell diamondback >}}.

Shortly after, Shiva will cast **Shining Armor** and stun anyone looking at her
when the cast finishes, so simply look away. She follows up with either **Axe
Kick**, a circular AOE, or **Scythe Kick** a large donut AOE, so dodge
accordingly. Shiva will then teleport to the center before beginning one of the
most infamous mechanics in all of FFXIV raiding.

### Light Rampant

> [!warning]
> This mechanic is called Light Rampant. If you call it Light's Rampant, Light
> Rampart, or any other weird name I will make fun of you forever.

Shiva will cast **Light Rampant** and deal heavy raidwide damage. This mechanic
has a lot of moving parts: chain debuffs (requiring that they maintain a
specific distance) on four players, four large orbs (that eventually shrink)
that tether to players and move towards them before exploding, and several
towers requiring one, two, or four players to be properly soaked. At the same
time, each instance of damage from one of the previously mentioned components
adds a Lightsteeped debuff stack and upon reaching 5 stacks a player will
detonate and completely wipe the raid.

One thing that makes this mechanic slightly easier is that the players who
receive the chain debuffs also get targeted by the orbs. One approach to
handling this is to have everyone use {{< spell mighty_guard >}} and {{< spell
diamondback >}} and stack in the center. With {{< spell angels_snack >}} ticking
and a second {{< spell diamondback >}} cast everyone should survive. I'm not a
huge fan of this since it requires two {{< spell diamondback >}} casts, so my
group had a different approach that let us squeeze in a bit more damage, reduce
the duration of damage downs after the mechanic, and still live pretty
comfortably. There is a raidplan for this mechanic
[here](https://raidplan.io/plan/X3RcIQAb7LsSdYPy) and this is how it works:

1. Everyone spreads to an initial clock position.
2. Once chains get applied, those players move to one of the intercardinal
   markers on the inside circle.
3. The remaining four players use their eyes to split into pairs in the north
   and south, just outside of the inner circle.
4. As soon as the Path of Light cast starts, everyone casts
   {{< spell diamondback >}}.
5. Orbs will pop, chains will break, but everyone should survive.
6. After the second Path of Light cleaves happen, the north and south pairs step
   into the tower in the center.

By doing it this way, all of the towers get resolved properly so the overall
damage is reduced. This means that {{< spell diamondback >}} is sufficient
mitigation and we don't even need to use {{< spell mighty_guard >}}! There is
another method that can be used that involves the chain players moving to
positions based on the orbs tethered to them and then backing away once chains
disappear to pop their orbs. This strat has the benefit of having no damage
downs, but is slightly (though not outrageously so) more difficult to execute.
The start of Light Rampant happens to line up with our {{< spell moon_flute >}},
but there isn't enough time to fit everything in and still get
{{< spell diamondback >}} off. However, you can still use them afterwards
without any loss
since everything will eventually be back up after the adds phase.

Shiva will cast **Mirror, Mirror** again followed by Axe Kick or Scythe Kick,
whichever wasn't user earlier and there will be four green mirrors on either the
cardinals or intercardinals which will repeat her attack. Everyone should have
preassigned clock positions and partners for these mirrors, as we will want two
people to move to each mirror later. If she casts Axe Kick, everyone will start
on the outside, then move directly to the center, and then to their clock
positions. If she casts Scythe Kick, everyone will start in the center, then
move out to their mirrors, and then spread towards their clock spots. Shiva will
also casat **Banish III** which is either a spread or a pair stack, but we will
treat it like a spread every time since the targeting is random. The indicator
for this is the number of orbs above her when she casts: one orb is partners,
four orbs is spread. We use {{< spell mighty_guard>}} to survive this in case it
is a stack, but if you see it is a spread then you can turn off
{{< spell mighty_guard >}}.

Once this all resolves, Shiva will return to the center and cast **Shattered
World**, which begins the adds phase. Split into east/west light parties and
ensure you have both a stun and an interrupt on each side.

## Adds Phase/Intermission

During the adds phase, Shiva will spawn four waves of enemies that do the
following:

- **Earthen Aether** will cast Stoneskin on itself and become much more
  difficult to kill, so this cast should be interrupted. You can technically use
  {{< spell eerie_soundwave >}} to remove this buff if you miss the interrupt,
  but it's easier to just do the interrupt correctly than use an entire
  spellslot on an otherwise ununsed spell.
- **Lightning Aether** reflects damage back at attackers.
- **Aqueous Aether** has substantially more health than the other adds but can
  be stunned and slowed.
- **Crystalline Snowflake** cannot be attacked, but has a tether to the center
  that must be intercepted by someone to prevent it dealing heavy raidwide
  damage. The tether has a small AOE when it goes off and applies a Light Vuln
  Up debuff.

Adds will spawn on the edge of the platforms and slowly move towards the center.
If any adds make it to the center, or a tether is not intercepted, points will
be added to the Flood of Light gauge. If this gauge reaches 100 then it is a
wipe, and if you make it through the whole phase with the gauge at 0 then there
is a small damage buff at the beginning of the next phase. Each side will
ultimately have the same waves of adds but in a slightly different order.

The west side adds appear in this order:

1. Aqueous Aether, two Lightning Aethers, and a Crystalline Snowflake.
2. Earthen Aether and Crystalline Snowflake.
3. Aqueous Aether, Earthen Aether, and Crystalline Snowflake.
4. Two Lightning Aethers and Crystalline Snowflake.

The east side adds appear in this order:

1. Aqueous Aether, Earthen Aether, and Crystalline Snowflake.
2. Two Lightning Aethers and Crystalline Snowflake.
3. Aqueous Aether, two Lightning Aethers, and a Crystalline Snowflake.
4. Earthen Aether and Crystalline Snowflake.

Each time a wave spawns, the whole party will be hit by **Heart Asunder** which
deals damage equivalent to 50% of maximum HP, so it's important to heal up
quickly before people start attacking Lightning Aethers. Each player can soak a
Crystalline Snowflake once, so an order needs to be established on each side.
{{< spell cold_fog >}} is extremely strong here since some of the adds can be a
bit beefy. Short cooldowns (<60 seconds) can also be used since there is a very
long cutscene after the adds phase.

If all the adds have died and the gauge hasn't reached 100, there will be a long
cutscene of Shiva summoning Hraesvelgr before going into the next phase.

## Phase 2: Dragon Shiva

### Akh Morn/Morn Afah

Throughout this entire phase it is very important that the off-tank (healer)
keeps {{< spell mighty_guard >}} on at all times, remains second on threat, and
that the threat stays consistent the entire time. Unexpected threat swaps can
cause immediate wipes during Akh Morns if you're not careful. If the off-tank
used {{< spell frog_legs >}} during Diamond Frost then there shouldn't be any
issues, but be mindful of the amount of threat that spells like
{{< spell white_wind >}} can generate. To be extra safe, only the tank should
really use {{< spell white_wind >}}.

Shiva opens up the phase with **Akh Morn**, which is similar to any other time
this ability shows up except it will go on both of the top two threat targets
and apply different debuffs to the primary and secondary targets. These debuffs
don't do anything special, but if you get hit by the opposite Akh Morn from the
debuff you currently have, you will die. This is why it's important that threat
does not swap unexpectedly. To handle Akh Morn, we just move into light party
stacks on the southwest/southeast of the boss (while making sure that the tank
and off-tank are in different stacks). Right afterwards she will use **Morn
Afah**, a heavy hitting stack damage AOE. This can either be shared as a group
or the main tank can take it solo with {{< spell diamondback >}}. If this hit is
shared by the party with 2 10% mitigations and nothing else then you will be in
{{< spell revenge_blast >}} range. My group found it more consistent to just
fully heal and mitigate this and then use {{< spell wild_rage >}} to put
ourselves into {{< spell revenge_blast >}} range.

After these first attacks, Shiva will use **Mirror, Mirror** again. This time
there will be a blue, green, and red mirror on the north, west, and east. Green
will always be north, but blue and red can be on either of east/west. Shiva will
then cast **Hallowed Wings**, which will cleave either her left or right
(whichever side has a glowing wing). First we need to dodge both her and the
blue mirror, then the green mirror, and then the red mirror (while also avoiding
the side that she didn't cast Hallowed Wings on originally, as she will do it on
the other side). An easy way to solve this is to first identify the safe
quadrant between her and blue, and then just rotate one quadrant per cast in the
direction of the green mirror and then red mirror. Since we take no damage
during this mechanic, we can continue casting {{< spell revenge_blast >}}.

### Wyrm's Lament

The next mechanic is **Wyrm's Lament**, which starts with a moderate raidwide so
heal up before. A dragon head will spawn at the north and then begin rotating
clockwise or counter-clockwise around the arena. Shiva will use Hallowed Wings
to cleave the east or west side of the arena with the dragon head four times in
a row. This means she will cleave twice on the side that the dragon head starts
on, and then twice on the side that the dragon head finishes on. At the same
time, four players will receive a blue debuff and four players will receive a
red debuff. If a player's debuff expires, they die. Red debuffs can be cleansed
by touching the dragon head, which deals moderate damage and leaves behind a
white circle on the ground. Blue debuffs can be cleansed by standing in the
white circle spawned by the red debuffs. Additionally, each debuff will have
different durations. An easy way to identify whose turn it is to cleanse is by
looking at these timers: if your debuff has 10 seconds or less, you are next in
line. To handle this, we stand on the side safe from the cleaves and as soon as
the cleave goes off whoever needs to resolve the mechanic moves out to do so.
Red players will move in front of the dragon head and blue players will move to
the circle left by the previous red player. The first red player can (and
should) immediately move to the north to cleanse as soon as the dragon head
spawns. After Shiva's second cleave, the entire party needs to swap sides to
remain safe from the next two cleaves.

With no mitigations at all, the red players will be put into
{{< spell revenge_blast >}} range from cleansing and since the blue players take
no damage from cleansing they can accomplish the same thing by using
{{< spell wild_rage >}} again. At some point everyone will naturally regen
health out too high, so you can just heal up to full after that.

As soon as Wyrm's Lament is finished, move directly to Shiva's southwest or
southeast to make the next dodges really easy. She will make the entire floor
slippery so stand absolutely still. She will then use **Twin Stillness**, which
is Biting Frost followed by Driving Frost, or **Twin Silence**, which is Driving
Frost followed by Biting Frost. As soon as the ice disappears you can dodge.
Right after she will use **Double Slap** again and then we have our second
{{< spell moon_flute >}} window of this phase.

### Akh Rhai

After Wyrm's Lament, the party should stack just south of Shiva for the
upcoming **Akh Rhai** cast. Akh Rhai is a multi-hit AOE on all players that
lingers where players were when the cast finished. The tell for when the
snapshot locks in is when Hraesvelgr spawns and the wings on the boss spread. As
soon as you see the wings spread, run directly through her to the north side to
be safe from all the AOEs.

### Knockback Mirrors

Our next major mechanic is "knockback mirrors," which has a lot of specific
mitigation and positioning requirements for a traditional party but we mostly
avoid the entire mechanic with {{< spell diamondback >}}. Shiva will spawn
mirrors on the east and west before jumping to either the north or south and
casting **Hallowed Wings**. This wings cast is different since both wings will
be glowing, and what it actually does is large damage in front of her with a big
knockback. Additionally, it has a kind of weird wild charge-like mechanic where
people in front will take more damage (and also receive a vuln). However, we can
ignore all of the nuance here. Once she teleports, run behind her. About one
second after her Hallowed Wings cast finishes, hardcast (without
{{< action swiftcast >}}) {{< spell diamondback >}}. If timed correctly, no one
should get knocked off the arena and everyone should be alive. Once this is
done, heal up to full and then have DPS use {{< spell wild_rage >}} to drop down
to {{< spell revenge_blast >}} range again.

The next bit of the fight involves "lookaway mirrors." It's a fairly long
mechanic but we shouldn't be taking any damage, so we're safe to keep blasting.
Shiva casts **Mirror, Mirror** yet again and spawns two blue, red, and green
mirrors. She will cast **Shining Armor** like before which requires us to look
away from her as well as away from the blue mirrors, then green mirrors, then
red mirrors. The easiest way to handle this is to immediately pull her next to
one of the blue mirrors. Once Shining Armor starts being cast, look directly
east/west (with the blue mirror as north) to look away from her and the mirrors.
Next, move just behind Shiva and look straight out to where the blue mirror was
previously to dodge the green mirrors. She will then start casting **Holy**
which will either be one large proximity AOE in the center or several proximity
AOEs on the perimeter of the arena. As with Banish III before, the tell is
actually above her head for which thing she will be doing. One large orb means
it will be in the center, while four small orbs means they will be on the
perimeter. If it's a big orb, stay towards the outside and continue looking
outwards. If it's four small orbs, move to the center and look away from both
red mirrors. Regardless of which it is, you need to heal up before this happens.
This is a good opportunity for {{< spell cold_fog >}} as it will also allow us
to move more freely for the next mechanic. Shiva will use either **Embittered
Dance**, which is Scythe Kick followed by Axe Kick, or **Spiteful Dance**, which
is Axe Kick followed by Scythe Kick. Either one can be avoided by just going to
max casting range to avoid both hits.

After the dance attack, Shiva will use Akh Rhai again. However, this time there
will also be a red mirror. This will be handled exactly the same way as before:
start south and move north when you see the wings spread. Afterwards, stack
north and look at the mirror's cast bar in the target list. Once the cast bar
finishes, run back through her to Akh Morn stack locations. There will not be
any time after the Morn Afah for {{< spell revenge_blast >}}, so just fully
mitigate and heal up and also execute a {{< spell moon_flute >}} opener. It's
important that we're not in Waning for the next mechanic so make sure you can
execute your opener while moving throughout this bit!

### Icelit Dragonsong

**Icelit Dragonsong** is the last major mechanic of the fight, but it is pretty
comfortably skippable if your DPS is on point. In general, I think it is easier
to optimize damage than it is to actually execute Icelit Dragonsong, but the
mechanic isn't _too_ bad overall. You can find a raidplan [here](https://raidplan.io/plan/fCTkH6ENu9imTfvj),
but the full list of steps is here:

1. Assign light parties to two opposite intercardinal directions, and within
   each light party divide players into left/right pairs. Each person will
   _also_ need a clock spread position (you can re-use the ones from before).
2. Stack in the center and put up {{< spell mighty_guard >}}.
3. Cleanse Freezing with {{< spell exuviation >}} immediately, then apply
   {{< spell angels_snack >}} and all available mitigations.
4. Move to your light party's side just inside Shiva's hitbox and use
   {{< spell diamondback>}}.
5. After the knockback, move to your assigned left/right side and use
   {{< action swiftcast >}} and {{< spell diamondback >}}.
6. Once {{< spell diamondback >}} ends, gap close with {{< spell j_kick >}} and
   move to your spread position.

The timing for this mechanic is pretty tight, but if done correctly then
everyone should survive. Shiva will then spawn a red mirror at the north half of
the arena, make the whole arena slippery. The ice will go away and she will cast
Akh Rhai while making the arena slippery again. Pull her north before all of
this, and as soon as the Akh Rhai cast finishes slide directly south to avoid
the hits.

The very last mechanic before enrage is **Wyrm's Lament 2**, but for our
purposes this is the hard enrage. This is essentially the same as **Wyrm's
Lament 1**, but there are _two_ dragon heads and Akh Morn and Morn Afah between
some of the dragon head mechanics. There is a _ton_ of adjusting involved and it
really requires deep understanding of the mechanic to properly handle it. It is
genuinely much easier to just skip this mechanic, so that should really be the
goal for the group.

## Final Sting

> [!note]
> Final Sting is harder to justify bringing for higher level content since boss
> HP is significantly higher. If you are able to fit it into your loadout then
> great, but don't stress about it too much.

Shiva's Final Sting threshold is roughly 7%. Once she is at 7%, apply
{{< spell off-guard >}}, use {{< spell moon_flute >}}, any Primal abilities
you have, then finish with {{< spell whistle >}} and
{{< spell final_sting >}}.

---
title: A8S (Brute Justice)
date: 2026-05-16
weight: 2
type: savage-guide
patch: "7.5"
---

## Overview

This is the fifth fight in the Morbol series and for most groups will be the
most difficult. It's a very long fight with many phases each with a bunch of
mechanics that need to be respected, and it's easy for small mistakes to cascade
out of control and cause wipes. The biggest thing to remember when doing this
fight is to remember that it is _not_ a DPS check, and mechanics _need_ to be
respected. There will even be times when DPS needs to stop completely in order
to ensure mechanics happen in predictable ways.

## Video Guide

{{< youtube aJFFcZ1m4jQ >}}

## Party Setup

For this fight I recommend the standard one tank mimic, two healer mimics, and
five DPS mimics. It _can_ be solo healed if you have a confident healer, and it
can help if you are trying to skip Gavel, but for most groups it will be safer
to run two healer mimics.

## Utility Spells

- {{< spell mighty_guard >}}
- {{< spell diamondback >}}
- {{< spell blood_drain >}} on the Brawler off-tank.
- {{< spell frog_legs >}} if resolving Gavel properly.
- {{< spell devour >}} if resolving Gavel properly.
- {{< spell white_wind >}} if resolving Gavel properly.

## Phase 1: Onslaughter

In the first phase we have to deal with Onslaughter, which is basically just
Manipulator Junior. Onslaughter periodically uses **Seed of the Sky**, which
just puts ground-targeted AOEs underneath random players, so watch your feet! It
will also use **Hydrothermal Missile**, which deals moderate AOE damage on the
tank, so stay away from the tank when possible.

For this phase I recommend saving your Moon Flute Opener and spells with >60s
cooldowns. Instead, start with a
{{< spell id="bristle" altText="Bristle-buffed" >}}
{{< spell song_of_torment >}} and group up on the tank. I know we said to avoid
Hydrothermal Missile, but we can stack for the first one to get a free
{{< spell cold_fog >}} proc and front-load a bunch of damage. After the first
Seed of the Sky, Onslaughter faces a random target and uses **Mega Beam**, which
is a lethal line AOE with a huge knockback, so sidestep it.

There will be a bunch of Hydrothermal Missiles and Seeds of the Sky so keep
dodging, and then four **Steam Regulators** will spawn, one in each corner. We
need to assign a DPS to kill each one. They spawn inside a square and tether to
the player that enters the square, which gives the player a small DOT debuff.
Leaving the square (including by death) or failing to kill the Steam Regulator
quickly will cause it to explode, wiping the raid. A {{< spell whistle >}},
{{< spell tingle >}}, and {{< spell triple_trident >}} combo will make quick
work of the regulators. The regulator killers need to be careful while burning
down their regulator because there will be a Seed of the Sky and a Mega Beam to
dodge. There _is_ plenty of space in the square to dodge, but it can be tight
especially if you're unprepared.

After the Mega Beam, Onslaughter will use **Perpetual Ray**. This is similar to
the multi-hit tankbuster from A4S but now it also applies a physical
vulnerability up debuff. The tank _needs_ to {{< spell diamondback >}} and will
still need to be healed during this, as it is still a ton of damage even through
{{< spell diamondback >}}. Onslaughter _should_ die shortly before or after
Perpetual Ray. If not, it will do some more AOEs and a Mega Beam. If you see a
**Legislation** cast it's a wipe. It's pretty confusing and easy to skip, so we
just focus on skipping it. Skipping Legislation was easy even at level 60, so
new spells make it that much easier to skip.

## Phase 2: Battle Bots

In this phase we have to fight the four robots from previous Alexander fights:
Blaster, Brawler, Swindler, and Vortexer. They each have different abilities
that they use above 50%, at 50%, and below 50%. This entire phase is all about
controlling mechanics, waiting for mechanics to be stable, pushing the current
target to 50%, and then burning it down before it can actually cause any issues.

This is by far the longest phase in the fight and it is all about controlled
DPS. Most mistakes _are_ recoverable and the phase itself is not a DPS race,
except when we are burning down a bot. The simplified flow of this phase is:

1. Kill Blaster and Swindler.
2. Push Brawler to 50%.
3. Resolve Brawler orbs.
4. Push Brawler to 10%.
5. Push Vortexer to 55%.
6. Wait for a Brawler mechanic so that the off-tank is in
   {{< spell diamondback >}}
7. Burn down Vortexer ASAP, then finish off Brawler.

The first two bots that spawn are Blaster in the north and Brawler in the
center. Brawler will stay in the center for the entire phase, but the other bots
will move with whoever is currently tanking them.

Both tanks will be taking quite a bit of damage throughout this entire phase,
especially at times when the main tank might be tanking two bots. I recommend
assigning one healer to each tank to make things easier.

For the entire phase neither of the tanks should use {{< spell white_wind >}}.
It generates an incredible amount of threat and pulling aggro on bots when you
don't mean to can cause a lot of problems (usually resulting in a wipe).

### Brawler Mechanics

One DPS or healer needs to be the off-tank here. Their job is to put on
{{< spell mighty_guard >}} and tank Brawler for the entire phase while pointing
it away from the party (west by default). Whenever Brawler attaches a **Single
Buster** or **Double Buster** to itself the off-tank needs to
{{< spell diamondback >}}. Single Drill is a heavy-hitting tankbuster and Double
Drill is meant to be a party line-stack AOE, but both are handled most easily
with {{< spell diamondback >}}. The **Double Drill** hits the two players that
are closest and furthest to Brawler with moderate AOE damage that knocks back
and stuns everyone else that gets hit (but not the primary targets). To handle
this we need to assign one player to be the Double Drill baiter. Their job is to
watch for Double Drill, or listen for the off-tank to call it, and then run to
one of the corners of the arena. It doesn't matter which corner they go to, they
just need to pick one so that they're the furthest from Brawler. Brawler uses
its mechanics in a random round-robin order, meaning if you see Single Buster
and Double Buster but haven't seen Double Drill yet, then the next mechanic will
be Double Drill. Once each mechanic has been used then they repeat again in
random round-robin order. When Brawler transitions at 50% the order resets as
well. Being able to predict what ability is coming up can be helpful to know
when it will be safe to transition other bots. Brawler is the very last bot we
kill so we will see its mechanics throughout this entire phase.

### Killing Blaster and Swindler

The rest of the party can whittle down Blaster but should not push it to 50% or
use long cooldowns yet. Blaster should be pulled to the east side since that is
where Swindler will be spawning. Once Swindler spawns, all the DPS (except the
off-tank) should do full Moon Flute Openers to burn down both Blaster and
Swindler ASAP. Our goal is to skip all of the mechanics for these bots, but
we'll go over what they are, anyway.

At 55% Blaster uses **Mind Blast**, which is just a small raidwide AOE that is
interruptable. At 50% Blaster spawns a **Blaster Mirage** that when close to
Blaster grants itself and Blaster a very strong vulnerability down buff. If
you're not killing Blaster before the Blaster Mirage becomes active and tethers
to Blaster, figure out why and fix it.

Swindler will use **Height Check** and assign High or Low Arithmeticks to each
player and adjust the height of the floor. Players need to move to a square that
is the "opposite" of their debuff. Low Arithmeticks (red debuff, vuln icon in
lower left of debuff) needs to go up to a high platform, and High Arithmeticks
(purple debuff, vuln icon in upper right of debuff) needs to go down to a low
platform. At 50% Swindler uses **Bio-arithmeticks** which is a _very_
heavy-hitting raidwide, so make sure everyone is at full health and mitigate
with {{< spell bad_breath >}}, {{< action addle >}}, {{< spell magic_hammer >}},
and {{< spell gobskin >}} if possible. Pay extra attention to the off-tank here,
and for extra safety you can wait for the off-tank to be in
{{< spell diamondback >}} for a Brawler mechanic. Below 50% Swindler will use
**Enumeration**, which puts a circle around two random players that requires
a specific number of players to be inside the circle or it kills the target.
As with Blaster Mirage, our goal is to just skip this entirely.

After Blaster and Swindler are dead the party should move to the south where
Vortexer will spawn.

### Brawler Push

The party should push Brawler to 50% next. At 50% Brawler will put up a strong
vulnerability down buff and become functionally invulnerable. It will also start
using **Single Drill** as one of its mechanics, which targets a random player
and hits them with damage based on how close they are to Brawler. Whenever
Single Drill is used, the party should make sure they are not near Brawler to
avoid getting one-shot by it. Brawler will also spawn two large purple **Power
Plasma Beta** orbs in random cardinal directions and two small green **Power
Plasma Gamma** orbs in random intercardinal directions. All four orbs will start
slowly moving towards Brawler.

The green Power Plasma Gamma orbs explode when they reach Brawler and wipe the
raid. They can be intercepted by players, which deals massive damage in a small
circle around the orb. Assign two players to pop these orbs and set a priority
system (e.g. Person A takes the orb starting from north going clockwise, Person
B takes the orb starting from north going counterclockwise). When these players
are going towards their orbs they need to be careful as they move around to
avoid getting hit by any Brawler mechanics if any are happening at the same
time. Healers need to watch these players closely as they take a ton of damage.
{{< spell mighty_guard >}} is required to survive, but {{< spell diamondback >}}
can make things a little bit safer.

The purple Power Plasma Beta orbs are targetable but not killable. They deal
moderate raidwide damage when they reach Brawler. Orbs can and should be slowed
to stagger their hits. Abilities like {{< spell bad_breath >}},
{{< spell reflux >}}, and {{< spell 4-tonze_weight >}} are good for this.
Additionally, things like {{< action addle >}} and {{< spell magic_hammer >}}
can be used to reduce the damage they deal. However, the easiest way to handle
this is to just let both orbs hit Brawler at the same time and have everyone
{{< spell diamondback >}} to survive.

### Push Vortexer and Finish Brawler

From this point on we want to hold any of our long cooldowns for Brute Justice
in the next phase. Brawler becomes targetable once the orbs have despawned. The
next thing we want to do it get Brawler to about 10%, but not kill it. Be _very_
careful about DOT effects here as we do not want to push it early.

Once Brawler is at 10% we switch to Vortexer and get it to 55% without pushing
to 50%. When Vortexer is pushed it uses **Super Cyclone**, a massive raidwide
AOE that also causes a massive knockback from Vortexer. We want to wait for the
off-tank to be in {{< spell diamondback >}} before we push for maximum safety.
If Brawler uses a Single Drill or Double Drill make sure to heal the targets
_before_ we actually push. The Super Cyclone damage should be mitigated as much
as possible, and the party should stand between Vortexer and the south wall so
that they don't actually get knocked back.

Just like with the other bots we need to burn down Vortexer ASAP. It will start
using **Elemental Jammer** which causes a bunch of spooky debuffs and missiles
that leave puddles around the arena. We really don't want to deal with this, so
we will just skip it. {{< spell cold_fog >}} on the Super Cyclone hit is a
_really_ good idea here, and {{< spell moon_flute >}} can help but should not be
needed.

Once Vortexer is dead, Brawler will start causing Self-Destruct, which is an
instant wipe if it finishes. Switch to Brawler and finish it off, and then get
ready for Brute Justice.

## Phase 3: Brute Justice

Have the party move to just east of the center of the arena and the tank just
north of the center. The five bots will show up in the middle and fuse into
Brute Justice. When they **Transform** there is a big knockback with moderate
raidwide damage. Use {{< action surecast >}} when the lightning appears between
the bots to negate the knockback.

Once Brute Justice is targetable, the tank should use {{< spell white_wind >}}
to quickly generate a bunch of threat. At this point everyone who can do a Moon
Flute Opener should be doing one, including one healer if possible (if you are
running two healers). Brute Justice opens up with **Flarethrower**, a conal
tankbuster, followed by **Double Rocket Punch**, which is meant to be a shared
tankbuster. The tank should try to learn the timing to generate threat and then
{{< spell diamondback >}} both hits, but it is most important to mitigate Double
Rocket Punch since it is not survivable otherwise.

Once the tankbusters are finished we get to play "ring around the robot." Brute
Justice sends out the following attacks at the same time:

- **Short Needle**: light raidwide AOE damage.
- **Long Needle (Prey)**: moderate AOE damage around two random players,
  indicated by a red circle overhead.
- **Long Needle (Stack)**: marks one random player with a stack marker that
  deals moderate AOE damage split between all players hit.

There is going to be a lot of damage, so mitigate as much as possible. There is
a lot going on and it will take some practice to get it right, but the overall
flow is pretty straightforward:

1. AOEs will appear under the party while a Flarethrower hits the tank, so the
   tank will need to be healed. The party should rotate to the south side of the
   boss.
2. The two Long Needle (Prey) markers will go out. Those two people should move
   away from the party and each other towards the south and east. More AOEs will
   appear under the party, so the party rotates to the west side of the boss.
3. The tank should try their best to dodge AOEs and also finish on the west
   side. At this point the Long Needle (Stack) and Long Needle (Prey) AOEs will
   go off.

Immediately after the AOEs go off, Brute Justice will start channeling a Mega
Beam so move away from its front. It will target the stacked party _most_ of the
time, but you do still need to make sure you know where he's looking to avoid
it.

While dodging the Mega Beam, the tank should move to one of the far corners of
the room and everyone else should stay close. Brute Justice will use **Super
Jump** on the furthest player, which causes it to jump to that player. Any other
players hit will be knocked back and stunned. If the tank uses
{{< spell j_kick >}} when the Super Jump cast finishes, then the AOE will be
snapshotted into the corner but Brute Justice will stay in the center.

After Super Jump, Brute Justice will channel **Apocalyptic Ray**, which is a
huge multi-hit frontal cone that applies a vuln stack with each hit. Just move
behind Brute Justice to Alexander Prime's Final Sting threshold is 15%. Once he
is at 15%, apply Off-guard Icon Off-guard, then use Moon Flute Icon Moon Flute,
any Primal abilities you have, and finish with Whistle Icon Whistle and Final
Sting Icon Final Sting. Most groups will be able to Final Sting before Inception
2, and being able to do so makes the fight dramatically easier.be safe.

Brute Justice will repeat all of these mechanics one more time and then go into
Intermission 1 if you haven't killed it yet.

{{< notice style="warning" >}}

Since the level 80 patch came out it is actually possible to do <em>too</em> much
damage and push Brute Justice before the Super Jump. If that happens you will be
in Waning Nocturne when Intermission 2 starts and probably die. If this is the
case, consider dropping {{< spell breath_of_magic >}} from one of the openers or
dropping {{< spell moon_flute >}} entirely from one or two people.

{{< /notice >}}

## Intermission 1

We don't do this. We skip it. If you're not skipping this then something is
seriously wrong and you should fix it.

## Intermission 2

Whenever Brute Justice's health is reduced to 0 it will jump away and begin
Intermission 2. When Brute Justice's health is about to hit 0 everyone should
put up {{< spell mighty_guard >}} and stack on the east wall of the arena.
Mighty Guard will stay up for all of Intermission 2.

Brute Justice will land with a {{< spell j_kick >}} before splitting off into
individual bots again. There is going to be a lot going on here, but most of it
will be ignored!

The first thing that happens is a Double Drill. Brawler spawns in the north side
of the arena, so send the tank close to it and the Double Drill baiter to the
southeast corner of the arena. Heal up the baiters once this hits.

There are going to be mines that spawn on random squares, so just be aware of
where they spawn and don't step on them. Some will be visible, and some _start_
visible and look like a green and black swirling circle before becoming hidden.

After Double Drill, Onslaughter will face a random person and start channeling
Mega Beam. If it's facing you, just step to the side without hitting any mines.
Once the beam actually fires, hardcast {{< spell diamondback >}} (no
{{< action swiftcast >}}). This is based on the animation of the Mega Beam, not
the cast bar. Once the beam fires and starts shrinking slightly that's when you
should use {{< spell diamondback >}}. If you timed this correctly, then you will
see a bunch of explosions, chakrams, and mirage charges, but everyone will be
safe.

Once you're out of {{< spell diamondback >}} Vortexer will start casting **Ultra
Flash** on the west side of the arena. Ultra Flash kills anyone in line of
sight, even through Diamondback. We will use Onslaughter's legs to get out of
line of sight. Position yourself such that one of Onslaughter's legs is between
you and Vortexer.

While Ultra Flash is happening, Swindler will also use **Enumeration**. This
puts a circle around two random players and requires 2-4 total players to be
inside the circle or else it explodes, killing the target. This _can_ be
mitigated by {{< spell diamondback >}} and is significantly easier than trying
to solve it with random targets. The players who get targeted by Enumeration
still need to avoid Ultra Flash, but need to stay away from the group to avoid
getting people caught in Enumeration. These players should stand back, get out
of line of sight of Vortexer, and then {{< action swiftcast >}}
{{< spell diamondback >}}. The Enumeration targets will end up with a max HP
down and damage down debuff, but these are inconsequential regardless of how
you are handling Gavel in the next phase. _If you mess up Gavel in the next
phase it is not because of these debuffs._

After all of this happens, the bots will rejoin to form Brute Justice. Brute
Justice now has an HP up buff and will fully heal itself with **Justice** before
we go into the next phase.

## Phase 4: Gavel

This is one of the most notorious Blue Mage mechanics, but its difficulty is
significantly overblown. The only thing that makes it somewhat difficult is that
you need to actually know what each debuff does in order to resolve it. The
basic idea is that Brute Justice will cast **Verdict** and apply debuffs to
everyone, and then 40 seconds later cast **Gavel** and instantly kill everyone
if the debuffs were not resolved correctly. If anyone dies at all during this
phase, including by {{< spell final_sting >}}, Brute Justice will instantly kill
everyone.

There are two ways to handle Gavel. We can either do it properly and resolve the
debuffs, or we can skip it by killing Brute Justice before Gavel finishes
casting.

#### Proper Gavel

**TL;DR**:
[Toolbox](https://ff14.toolboxgaming.space/?id=230935123921361&preview=1)

One tornado will spawn in each corner of the room. Stepping inside a tornado
sets your HP to 1 and gives you a Final Flight debuff which functionally does
nothing. A red Steam Regulator will spawn on either the east or west side, and a
blue Steam Regulator will spawn on whichever side the red one did not. These
regulators function the same as in phase 1, but the color will matter based on
debuffs described below. There will also be four orbs that spawn in the two
north squares between the tornadoes and the two south squares between the
tornadoes. The orbs deal moderate AOE damage when touched, and will explode and
wipe the raid if left up for too long.

Some of the debuffs mentioned here will include Final Punishment stacks. Each
time you take damage from Brute Justice (orbs and tornadoes count for this), you
lose one stack. If the debuff timer hits zero and you still have stacks you
instantly die.

Debuff resolution is checked when Gavel finishes casting. Here is the full list
of debuffs and how to resolve them:

- Final Judgment: Min HP
  - Must have the lowest HP in the party.
  - Includes 4 Final Punishment stacks.
  - This player should pop the southwest, northwest, and northeast orbs and then
    step into the northeast tornado when Gavel starts casting.
  - It is important to not heal this player after they step in the tornado until
    after Gavel is resolved.
- Final Judgment: Max HP
  - Must have the highest HP in the party.
  - Includes 4 Final Punishment stacks.
  - This player should immediately {{< spell frog_legs >}} and tank Brute
    Justice. They should help heal orb poppers with {{< spell white_wind >}},
    and then use {{< spell devour >}} when Gavel is being cast.
- Final Judgment: Penalty I
  - Must have one debuff from Brute Justice.
  - Includes 3 Final Punishment stacks.
  - This player should pop the southwest, northwest, and northeast orbs.
  - One debuff: Penalty I
- Final Judgment: Penalty II
  - Must have two debuffs from Brute Justice.
  - This player needs to step in the northwest tornado.
  - Two debuffs: Penalty II and Final Flight
- Final Judgment: Penalty III (on two players)
  - Must have three debuffs from Brute Justice.
  - Includes 2 Final Punishment stack.
  - One player needs to step in the southwest tornado and the other needs to
    step in the southeast tornado.
  - Three debuffs: Penalty III, Final Flight, Final Punishment
  - After Gavel resolves, both players should pop the southeast orb together to
    remove their Final Punishment stack and prevent the orb from exploding.
- Final Judgment: Decree Nisi A (Blue Nisi)
  - Must destroy the blue Steam Regulator and receive the Blue Nisi debuff.
  - Includes 1 Final Punishment stack.
  - This player should quickly kill their regulator, which can spawn on either
    the east or the west, and then pop the north orb on their side with the Min
    HP and Penalty I players.
- Final Judgment: Decree Nisi B (Red Nisi)
  - Must destroy the red Steam Regulator and receive the Red Nisi debuff.
  - Includes 1 Final Punishment stack.
  - This player should quickly kill their regulator, which can spawn on either
    the east or the west, and then pop the north orb on their side with the Min
    HP and Penalty I players.

If you run with the same eight people and don't have any deaths, then the debuff
assignment isn't completely random. With traditional jobs, the tanks get the
Min/Max HP debuffs, the healers get the Penalty I/II debuffs, and the DPS get
the Penalty III/Nisi debuffs. If you have the same eight people and no deaths,
then the same four people will _always_ get the support debuffs and the same
four people will _always_ get the DPS debuffs. Within those groups the debuffs
will be random.

If everything was done properly then everyone should live. Remember to turn off
{{< spell mighty_guard >}} when entering this phase if you don't need to have it
on (Min HP, Max HP, Penalty I).

#### Skip Gavel

Once we got access to level 70 spells it became possible to skip Gavel entirely.
With level 80 spells it's even easier, but there are still things that can trip
you up. Once Brute Justice regains his HP we have 38 seconds to kill it before
Gavel finishes casting. We also still need to kill the Steam Regulators or they
will blow up and wipe the group.

The basic strategy for this is to do a Moon Flute Opener and then synchronize
{{< spell id="final_sting" altText="Final Stings" >}} so that we are able to all
sting without getting killed (because Brute Justice kills _everyone_ if _anyone_
dies).

More specifically, the full rotation should look like this:

1. Pre-{{< spell bristle >}} before Brute Justice is targetable.
2. One person applies {{< spell breath_of_magic >}} while everyone else applies
   {{< spell song_of_torment >}}.
3. Use a full {{< spell phantom_flurry >}} including its second activation, then
   use a potion for extra damage.
4. Use 3 GCD spells. You _should_ have {{< spell the_rose_of_destruction >}} and
   {{< spell winged_reprobation >}} up here, but {{< spell sonic_boom >}} is
   still fine. Since we're not bringing many utility spells we should have room
   for everything. Weave your weaker OGCD spells like
   {{< spell feather_rain >}}, {{< spell shock_strike >}}.
5. {{< spell whistle >}} with {{< spell off-guard >}} or
   {{< spell peculiar_light >}} weaved.
6. {{< spell tingle >}}
7. {{< spell moon_flute >}} and {{< spell nightbloom >}}
8. {{< spell triple_trident >}} and {{< spell sea_shanty >}}
9. {{< spell bristle >}}, {{< action swiftcast >}}, and
   {{< spell being_mortal >}}
10. {{< spell matra_magic >}}
11. {{< spell whistle >}} and {{< spell surpanakha >}}x4
12. Wait for synchronized sting call, then {{< spell final_sting >}}.

{{< expand title="Expand to see full timeline..." >}}

{{< rotation gavel_skip >}}

{{< /expand >}}

It can be easier to synchronize stings if you use {{< action swiftcast >}} there
instead of {{< spell matra_magic >}}. I recommend using a countdown macro,
something simple like this works fine:

```
/p Get ready to sting! <se.1> <wait.1>
/p 5 <se.1> <wait.1>
/p 4 <se.1> <wait.1>
/p 3 <se.1> <wait.1>
/p 2 <se.1> <wait.1>
/p 1 <se.1> <wait.1>
/p STING! <se.1> <wait.1>
```

#### Which strategy is better?

This depends entirely on your group. If your group is good at mechanics and
intends to do more fights beyond the Morbol fights (like Omega and Eden), then
doing Gavel properly will be good practice for BLU mechanics and probably be
easier for you. If your group has no interest in learning mechanics and just
wants to get the Morbol, then maybe skipping might be better for you. At the end
of the day Gavel isn't mechanically much more difficult than the previous
phases, anyway.

Each BLU update makes skipping easier, but it's still not without issue. Final
Stings need to be synchronized well, there might be some Crit RNG involved, and
usually if people aren't good enough to just do mechanics then they also are
less likely to perform their rotation optimally.

In my personal experience with various groups it has taken less time overall to
just do Gavel. With experienced Savage raiders who studied beforehand it only
took about 3 pulls to get it correct. With less experienced raiders it took 1-2
nights usually. Skipping can take a handful of pulls, or it can take multiple
nights, so it's pretty much the same in the end.

## Phase 5: Final Justice

After Gavel, Brute Justice jumps away again and lands with J Kick. I recommend
putting on {{< spell mighty_guard >}} again to mitigate this damage, but other
mitigations can do the job fine as well. If your group was maintaining good
damage during Gavel then you'll be ready to sting Brute Justice pretty shortly
into this phase. This phase can be pretty chaotic but each bit in a vacuum is
pretty easy on its own.

The default positioning for this phase is to have the tank north of the boss and
the party south of the boss.

Brute Justice starts with **Link-Up** which empowers some of its abilities. This
also applies **Compressed Water** to a random player. Compressed Water creates a
water tornado when the debuff expires, which then needs to be removed by being
hit by Flarethrower. We'll actually be handling it by having the person who
receives the debuff die to prevent the tornado from spawning in the first place.

Brute Justice starts out with **Final Punch**, a tankbuster that does a
knockback and roots the target in place. The knockback is unavoidable and
removes {{< spell diamondback >}}. It follows up with **Final Apocalypse** which
is the same as **Apocalyptic Ray** from before but it does not apply vuln
stacks. Brute Justice finishes its tankbuster combo with **Final Beam**, which
is similar to Mega Beam from before but the damage is split between all targets
hit. There are two ways to handle this combo:

1. If your main tank is good at managing mana, and has some Super-Ethers for
   safety, they can {{< spell diamondback >}} the Final Punch hit and then
   immediately {{< spell diamondback >}} again to mitigate the other hits.
2. If mana is tight, which usually happens if you see the combo a second time,
   have the off-tank stand on one of Brute Justice's side and use
   {{< spell mighty_guard >}}. Once the Final Punch cast starts, they should use
   {{< spell frog_legs >}}, hit Brute Justice with something like
   {{< spell shock_strike >}} for some extra threat, and then
   {{< spell diamondback >}}. If done correctly, then the Final Apocalypse and
   Final Beam hits will be taken by the off-tank. The off-tank can also rejoin
   the party after Final Apocalypse starts and share the Final Beam with the
   party.

After the tankbuster combo Brute Justice will use Missile Command, which is
essentially the same as our first Brute Justice phase. There is going to be a
lot going on here and we handle it slightly differently from before. I recommend
having everyone spread out at the start, and then whoever has the stack marker
should just {{< spell diamondback >}}. There will also be an invisible mine that
spawns in one of the four center squares. The player who received the Compressed
Water debuff should stand on it to get rid of it while also killing themselves
at the same time. If the player is still alive, they need to find another way to
die (even just {{< spell final_sting >}} will get the job done). If the
Compressed Water player is targeted by the stack marker, they should just take
it without mitigating to die to that, and then the tank should detonate the mine
in the center.

{{< notice style="warning" >}}

It is possible for the tank to be targeted with Compressed Water. This is a
really unfortunate situation, but it can be handled by dying to Final Punch and
then quickly resurrecting the tank.

{{< /notice >}}

After the Missile Command spam ends the party should try to get close to Brute
Justice again, while the tank starts moving to a corner to try to bait an
upcoming Super Jump. A bunch of **Steam Chakrams** will appear around the
outside of the arena and Enumeration will appear on one player. Steam Chakrams
draw a straight vertical or horizontal line through the arena, deal a ton of
damage, and cause a huge knockback. You can either move out of the way of them
or {{< spell diamondback >}}. Enumeration is still tricky to handle, so that
person should {{< spell diamondback >}}

Once the chakrams have fired, Brute Justice uses a regular Mega Beam followed by
a Super Jump. This can be handled the same way as in the first Brute Justice
phase. Brute Justice will then use Flarethrower and _another_ set of Missile
Command AOEs, but this time there are no Prey or Stack markers. It finishes up
with another tankbuster combo before Brute Justice jumps away again, at which
point everyone should put on {{< spell mighty_guard >}} again.

## Phase 6: J Wave

This final phase is just a soft enrage. Brute Justice returns to the arena with
**J Storm**, which is essentially J Kick but hits _way_ harder. After this, it
starts spamming **J Wave**, which is a raidwide AOE that grants Brute Justice a
stacking damage up buff each time it is used.

Once Brute Justice lands, everyone should take off {{< spell mighty_guard >}}
and do as much DPS as possible. Healers can use {{< spell stotram >}} and
{{< spell angels_snack >}} to keep the party healthy, but will eventually need
to switch to {{< spell white_wind >}} to keep up with the damage. If it goes on
for long enough (and the healers don't have enough MP for
{{< spell white_wind >}}) then the healers will want to {{< spell pom_cure >}}
the tank while the tank uses {{< spell white_wind >}} instead.

## Final Sting

Brute Justice's Final Sting threshold is about 25%. Once it is at 25%, apply
{{< spell off-guard >}}, use {{< spell moon_flute >}}, any Primal abilities
you have, then finish with {{< spell whistle >}} and
{{< spell final_sting >}}. If your group maintains good DPS during Gavel then
this will be almost immediately after the Gavel phase ends.

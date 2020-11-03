export const smtStencils = [
    `SMT (surface mount technology) stencils, some times called SMD (surface mount device) stencils or PCB (printed circuit board) stencils are used during PCBs assembly process.
    SMT stencils are thin sheets of metal (usualy stainless steel) or some other material with openings which are called appertures.`,

    `The sole purpose of an SMT stencil is to apply accurate amount of solder paste to a bare circuit board.
    Once the stencil is properly aligned on top of the board, solder paste is applied over the openings (making a single pass, using a metal squeegee blade).
    When the SMT stencil is removed from the board, solder paste will remain, ready for placement of the SMD components.
    This process, as opposed to hand soldering methods, ensures consistency, saves alot of time and allows mass production.`,

    `Sheet thickness and aperture opening size control the volume of solder paste deposited on the board.
    Too much solder paste causes solder balling, bridging, and tomb-stoning.
    A lack of solder paste creates insufficient solder joints.
    All of which compromise the electrical functionality of the board.
    This is why it is recomended to use SMT stencils during PCB assembly.`,

    `SMT stencils are made of robust materials and can be manufactured in three different ways.`,

    `There are two types of SMT stencils based on their usage - Framed SMT stencil and Frameless STM stencils.`
];

export const chemicalEtching = [
    `As the name suggests the apertures are made through chemical etching.
    Chemical etched SMT stencil cost less but are also with the lowest quality.`,

    `The only time you should opt for etched stencils is when a multi-level is required and even then the apertures are laser cut.
    The etch process for apertures is restrictive in that the minimum size achievable is around 3/2 times the sheet thickness.
    This is not a problem with a laser cut stencil.`
];

export const electroformed = 'Electroformed SMT stencils are usualy with the highest quality but their cost is also highest and take longer time to produce.';

export const laserCut =
    `Apertures are created using laser machine.
Laser cutting produces accurate results and takes less time for manufacturing.
This is why laser cutting is the prefered technology for producing SMT stencils.
In fact over 90% of SMT stencils around the word are made through laser cutting.`;

export const framed = [
    `Framed stencils are used in large volume PCB production runs.
    These type of SMT stencils are permanently fixed on a frame.
    They receive the necessary tension from border mesh.
    Because of the frame it's less likely to have misalignment because the sheet can not slide around.`,

    `If you have the right equipment you can use frameless SMT stencils and stretch them into a frame yourself,
    but unless you're a board fab house its unlikely that this is cost effective.`
];

export const frameless = [
    'Frameless SMT stencils are for',

    'carring in universal or reusable frames;',

    'hand printing of PCBs.'
];

export const fiducials = (
    <>
        <p>
            <b>Fiducial marks</b> are used for aligment of the SMT stencil and the PCB board.
                </p>
        <p>
            There are two types of fiducial marks: engraved and cut.
                </p>
        <ul style={{ marginTop: '1rem' }}>
            <li>Engraved fiducial marks are used when there is a vision system involved;</li>
            <li>Cut fiducial marks are used for manual aligment.</li>
        </ul>
    </>
);

export const fiducialsAndPickAndPlace = [
    `During assembly of the PCB a pick and place machine with automated optical inspection (AOI) uses fiducial marks as reference points on the PCB to position the SMD components.
    If components are placed on double sided PCB designs, it is necessary to place fiducials on both sides of the PCB.`,

    `The whole process typically requires more than one fiducial mark in a non-reversible pattern.
    In fact it is recomended to have at least three fiducials. Two with diagonal placement.
    Pick and place machines with AOI are able to measure the rotation angle and compensate all of the placements accordingly so the components will be placed properly.`,

    `With the first two fiducials (diagonal placement) the pick and place machine can recognize where the PCB is at its X and Y position and also how skewed the PCB is in the clamps.
    Finally, the third fiducial helps the machine to compensate for any shrink or stretch of the PCB.`
];

export const fiducialsAndPanalization =
    `It is recommended – and sometimes necessary – to place fiducial markers near panel corners.
    These fiducials are called panel fiducials.
    It also depends on the kind of assembly machine how many fiducials you have to place.
    Usualy at least three are prefered.`;

export const fiducialsInLayout =
`Normally fiducials have a 1mm diameter of bare copper and 2mm solder mask opening.
The fiducials are placed as a component during the layout design.`;
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

export const header = [
    'Fiducial marks and Pick and place machine',
    'Fiducial marks and panalization',
    'Fiducial marks in layout desing'
];
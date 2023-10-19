import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip } from "@zcomponent/core";

import { CSS as CSS_0 } from "@zcomponent/html/lib/CSS";
import { CameraEnvironmentMap as CameraEnvironmentMap_1 } from "@zcomponent/zappar-three/lib/components/environments/CameraEnvironmentMap";
import { DefaultCookieConsent as DefaultCookieConsent_2 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_3 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_4 } from "@zcomponent/three/lib/components/Group";
import { DirectionalLight as DirectionalLight_5 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { Div as Div_6 } from "@zcomponent/html/lib/div";
import { testHTMLBehaviour as testHTMLBehaviour_7 } from "./testHTMLBehaviour";
import { HTML as HTML_8 } from "@zcomponent/three/lib/components/HTML";
import { InstantWorldTracker as InstantWorldTracker_9 } from "@zcomponent/zappar-three/lib/components/trackers/InstantWorldTracker";
import { Button as Button_10 } from "@zcomponent/html/lib/button";
import { SetLayerOff as SetLayerOff_11 } from "@zcomponent/core/lib/behaviors/SetLayerOff";
import { PlayLayerClip as PlayLayerClip_12 } from "@zcomponent/core/lib/behaviors/PlayLayerClip";
import { ShadowPlane as ShadowPlane_13 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { ZapparCamera as ZapparCamera_14 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";
import { Image as Image_15 } from "@zcomponent/three/lib/components/Image";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		CSS: CSS_0 & {
			behaviors: {

			}
		},
		CameraEnvironmentMap: CameraEnvironmentMap_1 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_2 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_3 & {
			behaviors: {

			}
		},
		Defaults: Group_4 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_5 & {
			behaviors: {

			}
		},
		Div: Div_6 & {
			behaviors: {
				0: testHTMLBehaviour_7,
				testHTMLBehaviour: testHTMLBehaviour_7,
			}
		},
		HTML: HTML_8 & {
			behaviors: {

			}
		},
		HTML_Place: HTML_8 & {
			behaviors: {

			}
		},
		HTML_Reset: HTML_8 & {
			behaviors: {

			}
		},
		InstantWorldTracker: InstantWorldTracker_9 & {
			behaviors: {

			}
		},
		Place_Button: Button_10 & {
			behaviors: {
				0: SetLayerOff_11,
			}
		},
		Placement: Group_4 & {
			behaviors: {

			}
		},
		Reset_Button: Button_10 & {
			behaviors: {
				0: PlayLayerClip_12,
			}
		},
		ShadowPlane: ShadowPlane_13 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_14 & {
			behaviors: {

			}
		},
		pulse_png: Image_15 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		PlacementMode: Layer & { clips: {
			On0: LayerClip;
		}};
	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;

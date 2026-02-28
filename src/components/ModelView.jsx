import { View, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";
import Lights from "./Lights";
import IPhone from "./IPhone";
import Loader from "./Loader";

const ModelView = ({
  index,
  size,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        ref={controlRef}
        makeDefault
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() =>
          setRotationState(controlRef.current?.getAzimuthalAngle() ?? 0)
        }
      />

      <group ref={groupRef} name={index === 1 ? "small" : "large"}>
        <Suspense
          fallback={<Loader />}
        >
          <IPhone
            item={item}
            size={size}
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;

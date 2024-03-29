"use client";

import { Plus } from "lucide-react";
import ActionTooltip from "@/components/providers/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add server">
        <button className="group" onClick={() => onOpen("createServer")}>
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[16px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-[rgba(124,58,237,10%)] dark:bg-neutral-700 group-hover:bg-[#8E78C9]">
            <Plus
              className="group-hover:text-white transition text-[#8E78C9]"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};

export default NavigationAction;
